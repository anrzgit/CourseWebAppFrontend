import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector ,} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { forgetPassword } from '../../redux/actions/profile'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('')
  const { loading, message, error } = useSelector(state => state.profile)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(forgetPassword(email))
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }
  }, [dispatch, error, message, navigate])

  return (
    <Container padding={8} height= '90vh' >
        <form onSubmit={submitHandler} >
            <Heading children = 'Forgot Password' 
            my={16} 
            textTransform={'uppercase'} 
            textAlign={['center','left']}></Heading>
            <VStack spacing={8} >
        <Input m={8}
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={'email'}
                focusBorderColor="yellow.500"
              />
        </VStack>
        <Button isLoading={loading} type='submit' w={'full'} colorScheme='teal' >Send Reset Link</Button>

        </form>
    </Container>    
  )
}

export default ForgotPassword