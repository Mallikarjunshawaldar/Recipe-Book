import React from 'react';
import { recipes } from '../../assets/recipes'; // Correct path
import './RecipeDetails.css';

const RecipeDetails = ({ id }) => {
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return <div className='no-recipe'>Recipe not found</div>;
  }

  return (
    <div className='recipe-details'>
      <h1 className='h1'>{recipe.name}</h1>
      <div className="content">
        <img src={recipe.image} alt={recipe.name} className='recipe-image' />
        <div className="details">
          <p className='p'>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <h2 className='instruction'>Instructions</h2>
          <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
