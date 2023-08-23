import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = ({color = "teal"}) => {
  return (
    <div>
        <VStack h={'100vh'} justifyContent={'center'} >

            <h1>Please wait Backend server take time for first time </h1>
            <div>
                <Spinner thickness='8px' speed={'0.45s'} emptyColor='transparent' color={color} size={'xl'}  />
            </div>
        </VStack>
    </div>
  )
}

export default Loader

