import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Everything from "./routes/Everything";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./routes/Home";
import TestRoute from "./routes/TestRoute";
import RecommendationTool from "./routes/RecommendationTool";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/recommendation"
            element={<RecommendationTool />}
          ></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/test" element={<TestRoute />}></Route>
        </Route>
      </Routes>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
