import React from "react";
import "./Work.css";
import meal from "../../Assets/meals.png";
import choose from "../../Assets/choose.png";
import deliever from "../../Assets/deliever.png";
const Work = () => {
  return (
    <div className="container work">
      <h6
        style={{
          color: "darkorange",
          fontWeight: "bold",
          wordSpacing: "2px",
          textAlign: "center",
        }}
      >
        Work
      </h6>
      <h1 className="work-head">How It Works</h1>
      <div className="work-para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
          consequatur esse impedit, libero obcaecati ipsam sed, debitis amet
          exercitationem.
        </p>
      </div>
      <div className="card-sec">
      <div
        className="card"
        style={{ width: "18rem",}}>
        <img src={meal} className="card-img-top c-img1" alt="meal" />
        <div className="card-body">
            <h4 style={{textAlign:"center",color:"rgb(106, 106, 106)",fontWeight:"bold"}}>Pick Meals</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vel vero nesciunt illo cupiditate ratione.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem",}}>
        <img src={choose} className="card-img-top c-img1" alt="meal" />
        <div className="card-body">
            <h4 style={{textAlign:"center",color:"rgb(106, 106, 106)",fontWeight:"bold"}}>Choose How Often</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vel vero nesciunt illo cupiditate ratione.
          </p>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "18rem",}}>
        <img src={deliever} className="card-img-top c-img1" alt="meal" />
        <div className="card-body">
            <h4 style={{textAlign:"center",color:"rgb(106, 106, 106)",fontWeight:"bold"}}>Fast Deliveries</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vel vero nesciunt illo cupiditate ratione.
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Work;
