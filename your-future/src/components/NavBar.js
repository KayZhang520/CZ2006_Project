import { Flex, HStack, Spacer, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Flex pb={"2rem"}>
      <HStack>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="recommendation">Get Recommendations</Link>
        </Button>
        <Button>
          <Link to="reviews">View Reviews</Link>
        </Button>
        <Button>
          <Link to="test">test</Link>
        </Button>
      </HStack>
      <Spacer></Spacer>
      <HStack>
        <Button>
          <Link to="login">Login</Link>
        </Button>
        <Button>
          <Link to="signup">Sign Up</Link>
        </Button>
      </HStack>
    </Flex>
  );
}

export default NavBar;
