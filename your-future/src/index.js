import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Everything from "./routes/Everything";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/recommendation" element={<Everything/> }></Route>
        </Route>
      </Routes>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
