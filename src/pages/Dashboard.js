import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GridItem, SimpleGrid, Heading, Button } from '@chakra-ui/react';


function Dashboard() {
  const changePage = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, [])

  const addHeir = async () => {
    try{
      setLoading(true);
      
      setLoading(false);
    }
    catch(err) {
      console.error(err);
      setLoading(false);
    }
  }


  return (
    <GridItem colSpan={5}>
      <Container maxW='1100px' mt="3" mb="2">
        <Heading size="md" color="#5D0890" mt="4" mb="10">Hospital Services</Heading>
        <Button mb="3" bg='#AF6DD8' color="white" onClick={() => changePage(`/form`)}>
          Add
        </Button>
        <SimpleGrid minChildWidth='300px' columns={[2]} spacing={10} mb="10">
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage(`/services/colonoscopy`)}>
            Colonoscopy
          </Button>
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage("/services/infusion")}>
            IV Infusion
          </Button>
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage("/services/outpatientVisit")}>
            Outpatient Visit
          </Button>
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage("/services/multivitamins")}>
            Multivitamins
          </Button>
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage("/services/:service")}>
            Genetic Testing
          </Button>
          <Button mr="3" bg='#AF6DD8' color="white" onClick={() => changePage("/services/:service")}>
            Promethazine
          </Button>
        </SimpleGrid>
      </Container>
    </GridItem>
  )
}

export default Dashboard;