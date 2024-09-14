// App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/home/Home';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails';
import Footer from './Components/Footer/Footer';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Components/ExploreMenu' element={<ExploreMenu />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/create-recipe' element={<CreateRecipe />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
