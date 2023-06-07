import React from "react";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = ()=>{
    const navigate =useNavigate();
    return (

        <Button className="btn btn-primary" onClick={()=>navigate("/login")}>Login</Button>
    );
};
export default SignIn;