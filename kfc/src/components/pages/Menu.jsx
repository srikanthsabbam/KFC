import React from "react";
import "./Menu.css"
import img from "../../assets/kfc bucket.jpg";

const Menu = ()=>{
    return( 
    <div className="bg">
        <div className="left">
        <span className="kfcm1">KFC MENU</span><br/>
        <span className="kfcm2">
            LEG PIECE BUCKET OFFER<br/>
            PERI PERI MATCH SPECIALS<br/>
            CHICKEN ROLLS<br/>
            CHICKEN BUCKETS<br/>
            BIRYANI BUCKETS<br/>
            BOX MEALS<br/>
            BURGERS<br/>
            SNACKS<br/>
            BEVERAGES</span>
        </div>

        <div className="right">
        <input className="search" text="text" placeholder="🔍 Search our menu"></input><br/>
        <hr className="line"  width="600px"></hr>
        <div className="right1">
            <span className="right2">LEG PIECE BUCKET OFFER</span><br/>
            <img className="imgkfc" src={img} alt=" kfc bucket" />
        </div>
        </div>
        
        
        
    </div>
    );
};
export default Menu;