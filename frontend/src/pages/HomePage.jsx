import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-black flex justify-center">
      <div className="bg-black h-screen  max-w-7xl mt-32">
        <h1 className="text-6xl text-white mb-7">Welcome to FoodHub </h1>
        <p className="text-white text-xl">
          Discover, create, and manage your food menus effortlessly with our intuitive platform.
          Whether you're a restaurant owner, caterer, or food enthusiast, FoodHub makes it easy to
          organize your menu items, update prices, and share delicious offerings with your
          customers.
        </p>
        <button className="text-white text-2xl bg-blue-800 p-5 w-80 rounded-lg mt-7">
          <Link to='/menus'>
            GO TO MENU
          </Link> 
        </button>
      </div>
    </div>
  );
};

export default HomePage;
