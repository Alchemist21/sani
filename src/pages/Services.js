import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  GridItem,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import data from '../data.json';

function Services({ contractNFT }) {
  const { service } = useParams();

  const [mData, setMData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try{
      setLoading(true);
      const arr = await contractNFT.returnArray(0);
      console.log(arr)
      let temp = [];
      for(let i = 0; i < arr.length; i++){
        let nftData = await fetch(arr[i] + "/price.json");
        nftData = await nftData.json();
        console.log(nftData);
        temp.push(nftData);
      }
      setMData(temp);
      setLoading(false);
    }
    catch(err) {
      console.error(err);
      setLoading(false);
    }
  }
  
  return (
    <GridItem colSpan={5}>
      <Heading size="lg" color="#5D0890" mt="4" ml="5" mb="10">Services</Heading>
      <TableContainer display>
        <Table variant='simple'>
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>{service}</Th>
              <Th>Service</Th>
              <Th>CPT/HCPCS Code</Th>
              <Th>Standard Charge in USD</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {mData.map(d => (
              <Tr key={d._id}>
                <Td></Td>
                <Td>{d.service}</Td>
                <Td isNumeric>{d.code}</Td>
                <Td isNumeric>{d.price}</Td>
                <Th></Th>
              </Tr>
            ))}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th>Total</Th>
              <Th isNumeric>2,572</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </GridItem>
  )
}

export default Services;