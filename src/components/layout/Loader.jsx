import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = ({color = "teal"}) => {
  return (
    <div>
        <VStack h={'100vh'} justifyContent={'center'} >

            <h1>Please wait I'm using free hosting for backend so It wil take some time for First Start</h1>
            <div>
                <Spinner thickness='8px' speed={'0.45s'} emptyColor='transparent' color={color} size={'xl'}  />
            </div>
        </VStack>
    </div>
  )
}

export default Loader

