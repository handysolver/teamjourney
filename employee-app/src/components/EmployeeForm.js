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
  Grid,
} from '@chakra-ui/react';
import {BASE_API_URL} from '../Constants';

const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
      first_name: '',
      middle_name: '',
      last_name: '',
      prefix: '',
      permanent_address: '',
      probation_salary: '',
      fulltime_salary: '',
      probation_period: '',
      notice_period: '',
      commitment_period: '',
      designation: '',
      date_of_joining: '',
      email: '', // Add the email field
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(BASE_API_URL, employeeData);
        setEmployeeData({
          first_name: '',
          middle_name: '',
          last_name: '',
          prefix: '',
          permanent_address: '',
          probation_salary: '',
          fulltime_salary: '',
          probation_period: '',
          notice_period: '',
          commitment_period: '',
          designation: '',
          date_of_joining: '',
          email: '', // Add the email field
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleChange = (e) => {
      setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };
  
    return (
      <Box p={4}>
  <Heading as="h2" size="lg" mb={4}>
    Add Employee
  </Heading>
  <form onSubmit={handleSubmit}>
    {/* <Grid templateColumns="repeat(3, 1fr)" gap={4}> */}
    <Grid templateColumns="16% 28% 28% 28%" gap={4}>
    <FormControl>
        <FormLabel>Prefix</FormLabel>
        <Input
          type="text"
          name="prefix"
          value={employeeData.prefix}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          name="first_name"
          value={employeeData.first_name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Middle Name</FormLabel>
        <Input
          type="text"
          name="middle_name"
          value={employeeData.middle_name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          name="last_name"
          value={employeeData.last_name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Probation Period</FormLabel>
        <Input
          type="text"
          name="probation_period"
          value={employeeData.probation_period}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Permanent Address</FormLabel>
        <Input
          type="text"
          name="permanent_address"
          value={employeeData.permanent_address}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Probation Salary</FormLabel>
        <Input
          type="text"
          name="probation_salary"
          value={employeeData.probation_salary}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Full-time Salary</FormLabel>
        <Input
          type="text"
          name="fulltime_salary"
          value={employeeData.fulltime_salary}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Notice Period</FormLabel>
        <Input
          type="text"
          name="notice_period"
          value={employeeData.notice_period}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Commitment Period</FormLabel>
        <Input
          type="text"
          name="commitment_period"
          value={employeeData.commitment_period}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Designation</FormLabel>
        <Input
          type="text"
          name="designation"
          value={employeeData.designation}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Date of Joining</FormLabel>
        <Input
          type="date"
          name="date_of_joining"
          value={employeeData.date_of_joining}
          onChange={handleChange}
        />
      </FormControl>
    </Grid>
    <Button type="submit" colorScheme="teal" gridColumn="1 / span 3">
      Add Employee
    </Button>
  </form>
</Box>

       );
     };

     export default EmployeeForm;