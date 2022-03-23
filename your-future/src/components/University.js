import { Box, Text, VStack, Image, Button, HStack } from "@chakra-ui/react";


export default function (props) {
  return (
    <Box className="university" w={"200px"} mb={20}>
      <Image src="https://imageio.forbes.com/specials-images/imageserve/1209892117/Dunster-House/960x0.jpg?fit=bounds&format=jpg&width=960"></Image>
      <VStack>
        <Text>{props.name}</Text>
        <Text>{props.location}</Text>
        <Text>
          {"\u2605".repeat(props.rating)}
          {"\u2606".repeat(5 - props.rating)}
        </Text>
      </VStack>
      <HStack w={"100%"} justify={"flex-end"}><Button>See Details</Button> </HStack>
  
    </Box>
  );
}
