'use client';
import React from 'react';
import { 
  VStack, 
  ChakraProvider,
  Button,
  Text
} from '@chakra-ui/react';
import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/features/counter/counterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <ChakraProvider>
      <VStack spacing={20} align="stretch" mt={20}>

        <Button
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>

        <Text>{count}</Text>

        <Button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>

        <Button
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </Button>

      </VStack>
    </ChakraProvider>
  );
}