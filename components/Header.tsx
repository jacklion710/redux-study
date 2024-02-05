'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../app/GlobalRedux/features/message/messageSlice';
import { Flex, Button, Input, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState('');

  const bgGradient = useColorModeValue('linear(to-r, teal.300, blue.500)', 'linear(to-r, orange.300, pink.500)');

  return (
    <Flex
      p={4}
      bgGradient={bgGradient}
      justifyContent="space-between"
      alignItems="center"
      borderRadius="md"
      boxShadow="md"
    >

      <Input
        placeholder="Enter a message"
        _placeholder={{ color: 'red.500' }}
        color='black'
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        width="auto"
        flex="1"
        mx={4}
      />

      <Button colorScheme="yellow" onClick={() => dispatch(setMessage(inputMessage))} mx={2}>
        Set Message
      </Button>
    </Flex>
  );
};

export default Header;
