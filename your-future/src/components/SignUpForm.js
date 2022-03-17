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

function SignUpForm() {
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
        <Heading size="2x1">Sign Up</Heading>
        <Text>If you already have an account, click here.</Text>
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
            <FormLabel>Username</FormLabel>
            <Input placeholder="JohnNTU"></Input>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John"></Input>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe"></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Jurong"></Input>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Singapore"></Input>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States</option>
              <option value="de">Germany</option>
            </Select>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Current University (if any)</FormLabel>
            <Input placeholder="Nanyang Technological University"></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Current Student</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size="lg" w="full">
              Sign Up
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
export default SignUpForm;
