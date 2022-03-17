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

function RequirementsForm() {
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
        <Heading size="2x1">Tell us what are you looking for.</Heading>
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
            <FormLabel>Study Level</FormLabel>
            <Input placeholder="Bachelor"></Input>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl></FormControl>
            <FormLabel>Destination</FormLabel>
            <Input placeholder="John"></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Physics"></Input>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Destination</FormLabel>
            <Select>
              <option value="usa">United States</option>
              <option value="de">Germany</option>
            </Select>
          </GridItem>
          <GridItem>
            <Button size="lg" w="full">
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
export default RequirementsForm;
