import {
  HStack,
  VStack,
  Container,
  Avatar,
  Text,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";

function Review(username, rating, comment) {
  return (
    <Container>
      <HStack>
        <VStack>
          <Avatar
            name="Ryan Reynolds"
            src="https://www.gannett-cdn.com/presto/2020/07/29/USAT/73d9330f-c382-4123-a56d-d61eefb2c373-AP_NY_Premiere_of_Netflixs__6_Underground_.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp"
            size="xs"
          ></Avatar>
          <Text>{username}</Text>
        </VStack>
        <VStack>
          <HStack>
            <Text>★★★★★</Text>
            <Text>reviewed 3 days ago...</Text>
          </HStack>
          <Text>{comment}</Text>
        </VStack>
      </HStack>
    </Container>
  );
}
export default Review;
