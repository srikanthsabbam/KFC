import React from "react";
import "./Deals.css";
import dealsimg from "../../assets/Deals.png";
import dealsimg1 from "../../assets/1pc.jpg";
import dealsimg2 from "../../assets/YAYFRIES.jpg";
import dealsimg3 from "../../assets/popcorn.jpg";


const Deals = ()=>{
    return (
    <div>
        <img className="dealsimg1" src={dealsimg} alt="kfc img" />
        <span className="deals1">NATIONAL OFFERS</span>
        <span className="deals2"><u>Sign In to see exclusive offers & deals</u></span>
        <div className="dealimgs">
        <img className="dealsimg2" src={dealsimg1} alt="kfc img1" />
        <img className="dealsimg3" src={dealsimg2} alt="kfc img2" />
        <img className="dealsimg4" src={dealsimg3} alt="kfc img3" />
        </div>


    </div>
    );
};
export default Deals;