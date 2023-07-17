import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('')
  return (
    <Container padding={8} height= '90vh' >
        <form>
            <Heading children = 'Forgot Password' 
            my={16} 
            textTransform={'uppercase'} 
            textAlign={['center','left']}></Heading>
        </form>
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
        <Button type='submit' w={'full'} colorScheme='teal' >Send Reset Link</Button>

    </Container>    
  )
}

export default ForgotPassword