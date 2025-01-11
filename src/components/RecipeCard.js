import React from "react";
import styled from "styled-components";
import Difficulty from "./Difficulty";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const Details = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin: 10px 0;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.title} />
      <Info>
        <Title>{recipe.title}</Title>
        <Details>
          {recipe.time} | {recipe.servings} servings | {recipe.calories}{" "}
          calories
        </Details>
        <Difficulty level={recipe.difficulty} />
      </Info>
    </Card>
  );
};

export default RecipeCard;
