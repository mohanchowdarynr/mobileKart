import React from "react";
import home from "../Assets/home.png";
import Brands from "../Components/Brands";
import mi from "../Assets/minote10.png";
import oneplus from "../Assets/onpelus9.png";
import realme from "../Assets/realme8.png";
import samsung from "../Assets/samsung21.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div className="hero py-2">
          <Link to="/ProductsPage">
            <img className="object-cover" src={home} alt="hero" />
          </Link>
        </div>
        <div className="Brands">
          <h1 className="text-xl md:text-3xl font-bold my-2 text-gray-700 text-center">
            Brands
          </h1>
          <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16  mt-8 uppercase">
            <Brands img={oneplus} brand="oneplus" />
            <Brands img={samsung} brand="samsung" />
            <Brands img={mi} brand="mi" />
            <Brands img={realme} brand="realme" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
