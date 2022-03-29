const { useEffect } = require("react");

const getData = () => {
  fetch("./data/Appliances_5.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });
};

useEffect(() => {
  getData();
}, []);
