import { Container } from '@chakra-ui/react'
import { Chart } from 'chart.js'
import React from 'react'
import Review from '../components/Review'
import University from '../components/University'
import UserForm from '../components/UserForm'

function Everything() {
  return (
      <Container>
    <Review
    username={"John Batholomew"}
    comment={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    rating={3}
  ></Review>
  <UserForm step={1}></UserForm>
  <University
    name={"NTU"}
    rating={5}
    location={"Singapore"}
    imgSrc={
      "https://imageio.forbes.com/specials-images/imageserve/1209892117/Dunster-House/960x0.jpg?fit=bounds&format=jpg&width=960"
    }
  ></University>
  {/* <Chart/> */}
</Container>
  )
}

export default Everything