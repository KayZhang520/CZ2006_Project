import { Flex, HStack, Spacer, Button } from '@chakra-ui/react';
import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <Flex>
    <HStack>
      <Button ><Link to="/">Home</Link></Button>
      <Button><Link to="recommendation">Get Recommendations</Link></Button>
      <Button ><Link to="reviews">View Reviews</Link></Button>
    </HStack>
    <Spacer></Spacer>
    <HStack>
      <Button
      >
        Login
      </Button>
      <Button
      >
        Sign Up
      </Button>
    </HStack>
  </Flex>
  )
}

export default NavBar