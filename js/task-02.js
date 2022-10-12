const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

const ingredientsList = ingredients.map(ingredient => {
   const listElement = document.createElement('li');
    listElement.textContent = ingredient;
    listElement.classList.add("item");
    return listElement;
});
  
console.log(ingredientsList);

ingredientsRef.append(...ingredientsList);
