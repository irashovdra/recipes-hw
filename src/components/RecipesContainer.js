import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const RecipeContainer = ({ recipes }) => {
  return (
    <Container>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default RecipeContainer;
