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

function LoginForm() {
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
        <Heading size="2x1">Login</Heading>
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
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>Username</FormLabel>
            <Input placeholder="John"></Input>
          </GridItem>{" "}
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Doe"></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input placeholder=""></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>remember me</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size="lg" w="full">
              Login
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}

export default LoginForm;
