import React from "react";
import periperi from '../../assets/periperi.jpeg';
import "./Home.css"; 

const Home = ()=>{
    return (
    <div>
        <img  className="periperi" src={periperi} alt="periperi" ></img><br/>
        <span className="welcome">Welcome To KFC!</span>
    </div>
    );
};
export default Home;