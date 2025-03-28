import React, { useState } from "react";

const Content = () => {


  const [ingredients,setingredients] = useState([]);

  const handelSubmit = (event) => {

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setingredients( prevIngredients => [...prevIngredients, newIngredient]);

  };

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (

    <main>
      <form onSubmit={handelSubmit} className="add-ingredient-form">
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
