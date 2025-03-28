import React, { useState } from "react";

const Content = () => {


  const [ingredients, setingredients] = useState([]);

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  const handelSubmit = (formData) => {

    const newIngredient = formData.get("ingredient");
    setingredients( prevIngredients => [...prevIngredients, newIngredient]);

  };

 

  return (

    <main>
      <form action={handelSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsList}</ul>
    </main>

  );
};

export default Content;
