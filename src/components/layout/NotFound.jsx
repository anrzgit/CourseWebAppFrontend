import { Button, Container, Heading, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'


const NotFound = () => {
    const handleClick = () => {
        window.location.href = '/';
      };
    
  return (
    <Container h="90vh">
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Page Not Found</Heading>
        <Button onClick={handleClick}>Go to home</Button>
      </VStack>
    </Container>
  )
}

export default NotFound