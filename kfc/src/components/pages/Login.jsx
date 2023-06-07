import React from "react";
import "./Login.css";
import { Button } from "react-bootstrap";
import Logo from "../../assets/kfc.jpeg";

const Login = ()=>{
    return( 
    <div>
        <span className="step1">Sign In / Sign up</span><br/>
        <img className="img" src={Logo} alt="kfc logo" ></img>
        <span className="step2">LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</span>
        <input className="step3" type="number" id="Phone Number*" placeholder="Phone Number*"></input>
        <span className="step4">By “logging in to KFC”, you agree to our <u>Privacy Policy</u> and <u>Terms & Conditions</u>.</span>
        <Button className="btn1">Send Me a Code</Button>
        <span className="or">________________________or_________________________</span>
        <Button className="final">Skip, Continue As Guest</Button>
    </div>
    );
};

export default Login;