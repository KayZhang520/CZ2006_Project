//--------------------------------------------------------------
//-------------------------place holder for app.js--------------
//--------------------------------------------------------------

import LoginForm from "./components/LoginForm.js";
import SignUpForm from "./components/SignUpForm";
import {
  Container,
  Heading,
  Button,
  HStack,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import SearchBar from "./components/SearchBar.js";
import PreferenceForm from "./components/PreferenceForm.js";
import RequirementsForm from "./components/RequirementsForm.js";
import Review from "./components/Review.js";
import { useState } from "react";
import ReviewColumn from "./components/ReviewColumn.js";
import getReviews from "./getReviews.js";

const reviews = getReviews();

function TestApp() {
  const [page, setPage] = useState("home");
  return (
    <Container>
      <Flex>
        <HStack>
          <Button>Get Recommendations</Button>
          <Button onClick={setPage("reviews")}>View Reviews</Button>
        </HStack>
        <Spacer></Spacer>
        <HStack>
          <Button
            onClick={() => {
              setPage("login");
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setPage("sign up");
            }}
          >
            Sign Up
          </Button>
        </HStack>
      </Flex>
      {page == "login" && <LoginForm></LoginForm>}
      {page == "sign up" && <SignUpForm></SignUpForm>}
      {page == "home" && (
        <VStack>
          <Heading>Your Future</Heading>
          <SearchBar></SearchBar>
        </VStack>
      )}
      {page == "reviews" && <ReviewColumn reviews={reviews}></ReviewColumn>}
    </Container>
  );
}

export default TestApp;
