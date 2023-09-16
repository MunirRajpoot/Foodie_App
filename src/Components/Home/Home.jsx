import React from "react";
import "./Home.css";
import img1 from "../../Assets/Home1.png"
import arrow1 from "../../Assets/arrow1.png"
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 text-area">
<h1 >Your Favourite Food Delivered Hot & Fresh</h1>
<p className="para">Healthy swithcher chefs do all the prep work,like peeding,choping & marinating,so you can cook a fresh food.</p>
<button className="order">Order Now </button>
        </div>
        <div className="col-4 ms-5">
<img className="img-home" src={img1} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
