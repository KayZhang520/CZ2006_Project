import { HStack, VStack, Container, Avatar, Text } from "@chakra-ui/react";

function Review(props) {
  return (
    <Container mb={2}>
      <VStack>
        <HStack justify={"flex-start"} w={"100%"}>
          <Avatar
            src="https://www.gannett-cdn.com/presto/2020/07/29/USAT/73d9330f-c382-4123-a56d-d61eefb2c373-AP_NY_Premiere_of_Netflixs__6_Underground_.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp"
            size="xs"
          ></Avatar>
          <Text>{props.username}</Text>
        </HStack>
        <VStack>
          <HStack justify={"flex-start"} w={"100%"}>
            {" "}
            <Text>
              {"\u2605".repeat(props.rating)}
              {"\u2606".repeat(5 - props.rating)}
            </Text>
            <Text>reviewed 3 days ago...</Text>
          </HStack>

          <Text>{props.comment}</Text>
        </VStack>
      </VStack>
    </Container>
  );
}
export default Review;
