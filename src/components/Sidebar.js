import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GridItem, Heading, Image, Text } from '@chakra-ui/react';

import SidebarImg from '../images/sidebar-img.png';

function Sidebar({ ethaddress }) {
  const changePage = useNavigate();

  return (
    <GridItem rowSpan={2} colSpan={1} bg='#C4A9FC' color='#5D0890' height="800px">
      <Container>
        <Heading size="md" color="#5D0890" mt="4" mb="3">Veterans Hospital</Heading>

        <Image src={SidebarImg} bg="#f2e1e5" alt="City" style={{ width: "100%", objectFit: "contain" }}/>

        <Text fontSize='xl' mt='8'>
          Patient Wallet: 
        </Text>
        <Text fontSize='lg'mt="1">
          {ethaddress ? ethaddress.substring(0,8) + "..." + ethaddress.substring(34,42) : "Connect to MetaMask"}
        </Text>

        <Text fontSize='xl'mt="10">
          Patient Number: 
        </Text>
        <Text fontSize='lg'mt="1">
          DR 23842
        </Text>

        <Text fontSize='xl'mt="10">
          Disclaimer:
        </Text>
        <Text fontSize='lg' mt="1">
          Please consult billing for more details
        </Text>

        <Text fontSize='xl'mt="10">
          Prices are effective
        </Text>
        <Text fontSize='lg' mt="1">
          09/06/2022
        </Text>
      </Container>
    </GridItem>
  )
}

export default Sidebar