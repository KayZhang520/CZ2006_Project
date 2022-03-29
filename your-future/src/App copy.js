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
  Image,
  Box,
} from "@chakra-ui/react";
import SearchBar from "./components/SearchBar.js";
import UserForm from "./components/UserForm.js";
import { useState } from "react";
import ReviewColumn from "./components/ReviewColumn.js";
import Review from "./components/Review.js";
import logo from "./media/logo.png";
import University from "./components/University.js";
import Chart from "./components/Chart.js";

function App() {
  const [page, setPage] = useState("home");
  return (
    <Container w={"1000px"} m={0}>
      <Flex>
        <HStack>
          <Button onClick={() => setPage("home")}>Home</Button>
          <Button>Get Recommendations</Button>
          <Button onClick={() => setPage("reviews")}>View Reviews</Button>
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
          <Box mb={10} mt={10}>
            <Image src={logo} alt="Image 404" />
          </Box>
          <SearchBar></SearchBar>
        </VStack>
      )}
      <Review
        username={"John Batholomew"}
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        rating={3}
      ></Review>
      {page == "reviews" && <ReviewColumn></ReviewColumn>}
      <UserForm step={1}></UserForm>
      <University
        name={"NTU"}
        rating={5}
        location={"Singapore"}
        imgSrc={
          "https://imageio.forbes.com/specials-images/imageserve/1209892117/Dunster-House/960x0.jpg?fit=bounds&format=jpg&width=960"
        }
      ></University>
      <Chart></Chart>
    </Container>
  );
}

export default App;
