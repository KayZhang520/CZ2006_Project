import getReviews from "../getReviews";
import Review from "./Review";

function ReviewColumn(props) {
  const content = posts.map((post) => (
    <div key={post.id}>
      <Review
        username={post.username}
        comment={post.comment}
        rating={post.rating}
      ></Review>
    </div>
  ));
  return <div>{content}</div>;
}

const posts = [
  { id: 1, username: "John", rating: 5, comment: "good school" },
  { id: 2, username: "Brian", rating: 4, comment: "bad school" },
];

export default ReviewColumn;
