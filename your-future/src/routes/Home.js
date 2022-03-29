import React from "react";
import SearchBar from "../components/SearchBar";
import University from "../components/University";
import { Heading, Icon, Flex } from "@chakra-ui/react";
import { SiGooglescholar } from "react-icons/si";

function Home() {
  return (
    <div>
      {" "}
      <Flex direction={"horizontal"} h="100px" align="center" justify="center">
        <Heading size="4xl">Your Future</Heading>
        <Icon as={SiGooglescholar} boxSize={"3rem"}></Icon>
      </Flex>
      <SearchBar></SearchBar>
      <University
        name={"NTU"}
        rating={5}
        location={"Singapore"}
        imgSrc={
          "https://imageio.forbes.com/specials-images/imageserve/1209892117/Dunster-House/960x0.jpg?fit=bounds&format=jpg&width=960"
        }
      ></University>
    </div>
  );
}

export default Home;
