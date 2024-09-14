import React, { useState } from 'react';
import { menu_list } from '../../assets/assets'; // Correct path
import './CreateRecipe.css';

const CreateRecipe = () => {
  const [selectedMenu, setSelectedMenu] = useState(menu_list[0].menu_name);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className='create-recipe' id='create-recipe'>
        <hr />
        <div className="recipe-menu">
          <h1 className='crh1'>Create your RECIPES</h1>
          <div className="recipe-containers">
            <h2 className='crh2'>Select your Menu</h2>
            <form className='create-form'>
              <select value={selectedMenu} onChange={handleChange}>
                {menu_list.map((menu, index) => (
                  <option key={index} value={menu.menu_name}>
                    {menu.menu_name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <p className='crp'>Selected Menu: {selectedMenu}</p>
        </div>
        <hr />
        <div className="recipes-details">
          <h1 className='crh1'>Enter your Recipes Details</h1>
          <div className="recipe-details-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" placeholder='enter dish name'/>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input type="text" placeholder='enter description in 100 words'/>
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            {imagePreview && <img src={imagePreview} alt="Image Preview" className="image-preview" />}
            <div className="form-group">
              <label>Ingredients:</label>
              <textarea rows="4" placeholder='enter ingredients step by step'></textarea>
            </div>
            <div className="form-group">
              <label>Instructions:</label>
              <textarea rows="4" placeholder='enter instruction'></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRecipe;
