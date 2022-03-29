import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Review from "../components/Review";
const { useEffect } = require("react");

function UniversityHome() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./data/Appliances_5.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="UniversityHome">
      <Image src="https://billfish.org/wp-content/uploads/2019/08/placeholder-image-1030x773.jpg"></Image>
      {data.slice(0, 100).map((entry, index) => {
        return (
          <Review
            username={entry.reviewerName}
            comment={entry.summary}
            rating={entry.overall}
            key={index}
          ></Review>
        );
      })}
    </div>
  );
}

export default UniversityHome;
