import React from "react";
import styled from "styled-components";

const getColor = (level) => {
  if (level === 0) return "#28a745";
  if (level === 1) return "#ffc107";
  return "#dc3545";
};

const Badge = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  background-color: ${(props) => getColor(props.level)};
  text-align: center;
`;

const Difficulty = ({ level }) => {
  const difficultyText = level === 0 ? "Easy" : level === 1 ? "Medium" : "Hard";
  return <Badge level={level}>{difficultyText}</Badge>;
};

export default Difficulty;
