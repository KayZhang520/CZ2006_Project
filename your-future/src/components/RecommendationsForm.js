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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";

function RecommendationsForm(props) {
  const [page, setPage] = useState(1);
  const Form = (function () {
    switch (page) {
      case 1:
        return (
          <Container>
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
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={1}>
                  <Button
                    size="lg"
                    w="full"
                    onClick={() => {
                      setPage(2);
                    }}
                  >
                    Continue
                  </Button>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </Container>
        );
      case 2:
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
                  <Button
                    size="lg"
                    w="full"
                    onClick={() => {
                      setPage(3);
                    }}
                  >
                    Submit
                  </Button>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </VStack>
        );
      case 3:
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
              <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                  <FormControl></FormControl>
                  <FormLabel>Teaching</FormLabel>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl></FormControl>
                  <FormLabel>Legacy</FormLabel>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl></FormControl>
                  <FormLabel>Tuition Cost</FormLabel>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl></FormControl>
                  <FormLabel>Accomodation</FormLabel>
                  <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={1}>
                  <Button
                    size="lg"
                    w="full"
                    onClick={() => {
                      setPage(4);
                    }}
                  >
                    Continue
                  </Button>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </VStack>
        );
      case 4:
        return (
          <h1
            onClick={() => {
              setPage(1);
            }}
          >
            Coming Soon.
          </h1>
        );
    }
  })();
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      {Form}
    </VStack>
  );
}
export default RecommendationsForm;
