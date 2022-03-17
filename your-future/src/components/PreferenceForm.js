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

function PreferenceForm() {
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
        <Heading size="2x1">
          Customise your search to fit your priorities.
        </Heading>
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
            <FormLabel>Teaching</FormLabel>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              step={10}
              valueLabelDisplay="on"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Legacy</FormLabel>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              step={10}
              valueLabelDisplay="on"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Tuition Cost</FormLabel>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              step={10}
              valueLabelDisplay="on"
            />
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl></FormControl>
            <FormLabel>Accomodation</FormLabel>
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              step={10}
              valueLabelDisplay="on"
            />
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
export default PreferenceForm;
