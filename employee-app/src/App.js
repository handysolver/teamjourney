import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Container,
} from '@chakra-ui/react';
import theme from './theme';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import {BASE_API_URL} from './Constants';


   function App() {
     return (
       <ChakraProvider theme={theme}>
         <Container maxW="container.lg" py={8}>
          <EmployeeForm />
          <EmployeeList />
         </Container>
       </ChakraProvider>
     );
   }

   export default App;
   