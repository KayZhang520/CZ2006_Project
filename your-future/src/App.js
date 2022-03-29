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
import NavBar from "./components/NavBar.js";
import {Outlet} from "react-router-dom"

function App() {
  const [page, setPage] = useState("home");
  return (
    <Container mw={"50%"} style={{border:"1px solid red"}}>
     <NavBar></NavBar>
     <Outlet/>
      
    </Container>
  );
}

export default App;
