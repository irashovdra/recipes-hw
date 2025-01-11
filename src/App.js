import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import RecipeContainer from "./components/RecipesContainer";
import recipes from "./data/recipes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecipeContainer recipes={recipes} />
    </>
  );
};

export default App;
