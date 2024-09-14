import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import Modal from '../Model/Model'; // Import the modal
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './FoodItem.css';

const FoodItem = ({ id, name, description, image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleArrowClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img className='arrows' src={assets.arrow_down} alt="" onClick={handleArrowClick} />
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <RecipeDetails id={id} />
      </Modal>
    </div>
  );
}

export default FoodItem;
