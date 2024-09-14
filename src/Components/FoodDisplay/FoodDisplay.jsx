import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    // Flatten the food list array based on the selected category
    const foodItems = category === "All"
        ? Object.values(food_list).flat()
        : food_list[category] || [];

    return (
        <div className='food-display' id='food-display'>
            <h2>Top RECIPES for you</h2>
            <div className="food-display-list">
                {foodItems.map((item, index) => (
                    <FoodItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default FoodDisplay;
