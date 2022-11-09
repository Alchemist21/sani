import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Form from './pages/Form';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [ethaddress, setETHAddress] = useState("");
  const [contractNFT, setContractNFT] = useState(null);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/services/:service"
          element={
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
          >
            <Sidebar ethaddress={ethaddress} />
            <Services contractNFT={contractNFT} />
          </Grid> } />
        <Route
          path="/dashboard"
          element={
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
          >
            <Sidebar ethaddress={ethaddress} />
            <Dashboard />
          </Grid> } />
        <Route
          path="/form"
          element={
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
          >
            <Sidebar ethaddress={ethaddress} />
            <Form contractNFT={contractNFT} />
          </Grid> } />
        <Route
          path="/"
          element={
            <>
             <Navbar />
             <Home
                setETHAddress={setETHAddress}
                setContractNFT={setContractNFT} />
            </>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
