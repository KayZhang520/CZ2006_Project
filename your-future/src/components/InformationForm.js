import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

import { Slider } from "@mui/material";

function PreferenceForm(props) {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2x1">Tell us more about yourself.</Heading>
      </VStack>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.50"
        className="abc"
      >
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full ">
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Highest Education</FormLabel>
            <Input></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Exam Format</FormLabel>
            <Input></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>GPA</FormLabel>
            <Input></Input>
          </GridItem>
          <GridItem>
            <Button size="lg" w="full" onClick={props.handler(3)}>
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
export default PreferenceForm;
