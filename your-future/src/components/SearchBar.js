import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  HStack,
  Container,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaFlagUsa, FaBookReader } from "react-icons/fa";
import { AiOutlineTrophy, AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

export default function SearchBar() {
  return (
    <Container pb="3rem">
      <HStack mb={2}>
        <Input defaultValue={"testing"}></Input>
        <Button>
          <Icon as={AiOutlineSearch} mr={2}></Icon>Go!
        </Button>
      </HStack>
      <HStack mb={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={" "}>
            <Icon as={FaFlagUsa} mr={2}></Icon>
            Country
            <Icon as={MdArrowDropDown} ml={1}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Singapore</MenuItem>
            <MenuItem>United States</MenuItem>
            <MenuItem>United Kindom</MenuItem>
            <MenuItem>Germany</MenuItem>
            <MenuItem>China</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={" "}>
            <Icon as={AiOutlineTrophy} mr={2}></Icon>
            Ranking
            <Icon as={MdArrowDropDown} ml={1}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Top 5</MenuItem>
            <MenuItem>Top 10</MenuItem>
            <MenuItem>Top 20</MenuItem>
            <MenuItem>Top 100</MenuItem>
            <MenuItem>Top 200</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={" "}>
            <Icon as={FaBookReader} mr={2}></Icon>
            Courses
            <Icon as={MdArrowDropDown} ml={1}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Engineering</MenuItem>
            <MenuItem>Computer Science</MenuItem>
            <MenuItem>Sociology</MenuItem>
            <MenuItem>Chinese</MenuItem>
            <MenuItem>Physics</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Container>
  );
}
