import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import RecommendationsForm from "../components/RecommendationsForm";

function RecommendationTool() {
  return (
    <Container>
      <div>Recommendation Tool</div>
      <RecommendationsForm></RecommendationsForm>
    </Container>
  );
}

export default RecommendationTool;
