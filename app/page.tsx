'use client';
import React from 'react';
import { 
  VStack, 
  ChakraProvider, 
  Text, 
  Container, 
  Divider
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import type { RootState } from './GlobalRedux/store';
import Header from '../components/Header';

export default function Home() {
  const message = useSelector((state: RootState) => state.auth.message);

  return (
    <ChakraProvider>
      <Header />
      <Container maxW="container.md" centerContent>
        <VStack spacing={8} align="stretch" mt={10}>

          <Text textAlign='center' fontSize="2xl" color={'gray.200'} fontWeight="bold">
            {message || 'Welcome! Set a message using the header.'}
          </Text>

          <Divider w="75%" alignSelf={'center'}></Divider>

          <Text fontSize="xl" color={'gray.200'}>The header component above exists as a separate folder in a separate directory from which the current page exists.</Text>

          <Text fontSize="xl" color={'gray.200'}>When you enter information into the header and submit it, that header will pass on its data onto any component with the help of react-redux.</Text>

          <Text fontSize="xl" color={'gray.200'}>Under /app there is a directory called /GlobalRedux which is where global states are managed from.</Text>

          <Text fontSize="xl" color={'gray.200'}>Within /GlobalRedux there is a /features folder which can contain subfolders of varying categories such as /auth /settings as well as any other subject that requires sharing across components.</Text>

          <Text fontSize="xl" color={'gray.200'}>Each feature folder contains a slice file. In this case we are employing app/GlobalRedux/features/message/messageSlice.tsx which defines the reducer for the shared message slice.</Text>

          <Text fontSize="xl" color={'gray.200'}>Lastly, under /GlobalRedux exists a provider.tsx file which is used to wrap the app in /app/layout.tsx.</Text>

          <Text fontSize="xl" color={'gray.200'}>That message then gets dispatched from the header and selected from the current page.</Text>

        </VStack>
      </Container>
    </ChakraProvider>
  );
}
