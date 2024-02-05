"use client"
import React, { useState } from 'react';
import { 
  Center,
  VStack, 
  Button,
  ChakraProvider,
  Image,
  Box,
  Link
} from '@chakra-ui/react';

export default function Home() {
  const [animateFade, setAnimateFade] = useState(false);
  const [animateRotate, setAnimateRotate] = useState(false);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [animateScale, setAnimateScale] = useState(false);
  
  return (
    <ChakraProvider>
      <VStack spacing={20} align="stretch" mt={20}>

        

      </VStack>
    </ChakraProvider>
  );
}