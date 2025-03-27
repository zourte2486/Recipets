const Content = () => {
  const ingredients = ["tomato", "onion", "lettuce", "cucumber"];



  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  }
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
