import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Heading, Flex, Spacer, Button } from '@chakra-ui/react';


function Navbar() {
  const changePage = useNavigate();

  return (
    <Container maxW='1100px' p={2}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='lg' color="#5D0890">SANITAS</Heading>
        </Box>
      </Flex>
    </Container>
  )
}

export default Navbar;