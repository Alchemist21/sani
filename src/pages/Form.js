import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormLabel, Box, GridItem, ButtonGroup, Spinner, Input, Select, Heading, Button } from '@chakra-ui/react';
import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({ token: "" });

function Form({ contractNFT }) {
  const changePage = useNavigate();

  const [type, setType] = useState("");
  const [service, setService] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const addData = async () => {
    try{
      setLoading(true);
      const data = JSON.stringify({ 
        service,
        code,
        price,
      });
      const blob = new Blob([data], {type: 'text/plain'});
      const newFile = new File([ blob ], 'price.json');

      const cid = await client.put([newFile], {
        onRootCidReady: localCid => {
          console.log(`> 🔑 locally calculated Content ID: ${localCid} `)
          console.log('> 📡 sending files to web3.storage ')
        },
        onStoredChunk: bytes => console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
      })

      console.log(`https://dweb.link/ipfs/${cid}`);

      const transaction = await contractNFT.addData(type, `https://dweb.link/ipfs/${cid}`);
      const tx = await transaction.wait();
      console.log(tx);

      setLoading(false);
    }
    catch(err) {
      console.error(err);
      setLoading(false);
    }
  }
  
  return (
    <GridItem colSpan={5}>
      <center>
        <Box borderWidth='1px' borderRadius='lg' borderColor="teal" overflow='hidden' p="5" width="500px" mt="32">
          <Heading fontSize='2xl' mb="3">Add Price </Heading>
          <FormControl mb="3">
            <FormLabel>Category</FormLabel>
            <Select placeholder='Select Category' onChange={(e) => setType(e.target.value)}>
              <option value="0">Colonoscopy</option>
              <option value="1">IV Infusion</option>
              <option value="2">Outpatient Visit</option>
              <option value="3">Multivitamins</option>
              <option value="4">Genetic Testing</option>
              <option value="5">Promethazine</option>
            </Select>
          </FormControl>
          <FormControl mb="3">
            <FormLabel>SERVICE</FormLabel>
            <Input onChange={(e) => setService(e.target.value)} />
          </FormControl>
          <FormControl mb="3">
            <FormLabel>CPT/HCPCS CODE</FormLabel>
            <Input onChange={(e) => setCode(e.target.value)}/>
          </FormControl>
          <FormControl mb="3">
            <FormLabel>Price</FormLabel>
            <Input onChange={(e) => setPrice(e.target.value)}/>
          </FormControl>
          {loading
            ? <Spinner color='teal' />
            : <ButtonGroup spacing='6'>
                <Button bg='#AF6DD8' color="white" onClick={addData}>
                  Add
                </Button>
                <Button onClick={() => changePage("/dashboard")}>Cancel</Button>
              </ButtonGroup>
          }
          <br />
          <br />
          {/* {proof.length && <p><strong>Proof</strong></p>}
          {proof.map((p, i) => (
            <p key={i}>{p}</p>
          ))} */}
        </Box>
      </center>
    </GridItem>
  )
}

export default Form;