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
import {BASE_API_URL} from '../Constants';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
  
    useEffect(() => {
      fetchEmployees();
    }, []);
  
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(BASE_API_URL);
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const deleteEmployee = async (id) => {
      try {
        await axios.delete(`${BASE_API_URL}/${id}`);
        fetchEmployees();
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Employee List
        </Heading>
        <Box overflowX="auto">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Prefix</Th>
                <Th>First Name</Th>
                <Th>Middle Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Permanent Address</Th>
                <Th>Probation Salary</Th>
                <Th>Full-time Salary</Th>
                <Th>Probation Period</Th>
                <Th>Notice Period</Th>
                <Th>Commitment Period</Th>
                <Th>Designation</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((employee) => (
                <Tr key={employee._id}>
                  <Td>{employee.prefix}</Td>
                  <Td>{employee.first_name}</Td>
                  <Td>{employee.middle_name}</Td>
                  <Td>{employee.last_name}</Td>
                  <td>{employee.email}</td>
                  <Td>{employee.prefix}</Td>
                  <Td>{employee.permanent_address}</Td>
                  <Td>{employee.probation_salary}</Td>
                  <Td>{employee.fulltime_salary}</Td>
                  <Td>{employee.probation_period}</Td>
                  <Td>{employee.notice_period}</Td>
                  <Td>{employee.commitment_period}</Td>
                  <Td>{employee.designation}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => deleteEmployee(employee._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    );
  };

  export default EmployeeList;