import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'

const ResetPassword = () => {
    const [password, setPassword] = React.useState('')
    const params = useParams();


    return (
      <Container padding={8} height= '90vh' >
          <form>
              <Heading children = 'Reset Password' 
              my={16} 
              textTransform={'uppercase'} 
              textAlign={['center','left']}></Heading>
          </form>
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
          <Button type='submit' w={'full'} colorScheme='teal' >Reset password</Button>
  
      </Container>    
    )
}

export default ResetPassword