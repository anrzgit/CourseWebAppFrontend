import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../redux/actions/profile'
import { toast } from 'react-hot-toast'


const ResetPassword = () => {
    const [password, setPassword] = React.useState('')
    const { loading, message, error } = useSelector(state => state.profile)

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const submitHandler = e => {
      e.preventDefault()
      dispatch(resetPassword(params.token, password))
    }

    useEffect(() => {
      if (error) {
        toast.error(error)
        dispatch({ type: 'clearError' })
      }
      if (message) {
        toast.success(message)
        dispatch({ type: 'clearMessage' })
        navigate('/login')
      }
    }, [dispatch, error, message, navigate])


    return (
      <Container padding={8} height= '90vh' >
          <form  onSubmit={submitHandler} >
              <Heading children = 'Reset Password' 
              my={16} 
              textTransform={'uppercase'} 
              textAlign={['center','left']}></Heading>
              <VStack spacing={8} >
          <Input m={8}
                  required
                  id="email"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="New Password"
                  type={'password'}
                  focusBorderColor="yellow.500"
                />
          </VStack>
          <Button isLoading={loading} type='submit' w={'full'} colorScheme='teal' >Reset password</Button>   
          </form>
          
  
      </Container>    
    )
}

export default ResetPassword