import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SimpleGrid, Box, Heading, Stack, Text, Image, FormControl, FormLabel, Input, Spinner, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import Hero1 from '../images/top-hero.png';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import Footer1 from '../images/footer1.png';
import Footer2 from '../images/footer2.png';

import { ABI, CONTRACT_ADDRESS } from "../contractdata/config";

function Home({ setETHAddress, setContractNFT }) {
  const changePage = useNavigate();

  const openMetaMask = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);  

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setETHAddress(address);

    const contractNFT = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    setContractNFT(contractNFT);

    changePage("/dashboard");
  }

  return (
    <>
      <Image src={Hero1} bg="#f2e1e5" alt="City" style={{ width: "100%", height: "270px", objectFit: "contain" }}/>
      <Container maxW='1100px'>
        <SimpleGrid minChildWidth='500px' columns={2} spacing={10}>
          <div>
            <Heading size='2xl' mt={14}>
              Hospital Price
            </Heading>
            <Heading size='2xl'>
              Transparency
            </Heading>
            <Heading size='2xl'>
              Made Easy
            </Heading>
            <Button bg='#fc85ae' size='lg' mt={5} mb={20} onClick={openMetaMask}>
              Login with Metamask
            </Button>
          </div>
        </SimpleGrid>
      </Container>

      <Container maxW='1100px'>
        <SimpleGrid minChildWidth='200px' columns={[4]} spacing={12}>
          <Box>
            <Heading size='md' mb={3}>
              Sanitas
            </Heading>
            <Text fontSize='xl'>
              We enable hospital transparency price easier
            </Text>
          </Box>
          <Box>
            <Heading size='md' mb={3}>
              Latest News
            </Heading>
            <Image mt={6} src={Footer1} alt="Space"/>
            <Image mt={2} src={Footer2} alt="Space"/>
          </Box>
          <Box>
            <Heading size='md' mb={3}>
              Quick Links
            </Heading>
            <Text fontSize='xl' mb={1}>
              Home
            </Text>
            <Text fontSize='xl' mb={1}>
              About
            </Text>
            <Text fontSize='xl' mb={1}>
              Services
            </Text>
            <Text fontSize='xl' mb={1}>
              Blog
            </Text>
          </Box>
          <Box>
            <Heading size='md' mb={3}>
              Have a Question?
            </Heading>
            <Text fontSize='lg' mb={1}>
              Queens New York
            </Text>
            <Text fontSize='lg' mb={1}>
              +1 347 545 6769
            </Text>
            <Text fontSize='md' mb={1}>
              medtechsolutionsio@gmail.com
            </Text>
          </Box>
        </SimpleGrid>
        <Text fontSize='xl' align="center" mt="10" mb="10">
          Copyright 2022, All rights reserved 
        </Text>
      </Container>
    </>
  )
}

export default Home;