import { Flex } from "@chakra-ui/react";
import Review from "./Review";

function ReviewColumn(reviews) {
  console.log("review column redered.");
  return (
    <Flex>
      {reviews.map((username, rating, comment) => (
        <Review username={username} rating={rating} comment={comment}></Review>
      ))}
    </Flex>
  );
}

export default ReviewColumn;
