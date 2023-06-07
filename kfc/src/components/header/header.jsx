import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import './header.css';
import Logo from '../../assets/kfc.jpeg';
import signin from '../../assets/signin.jpeg';
import bucket from '../../assets/bucket.jpeg';
import {Link} from "react-router-dom";
// import SignIn from "../pages/SignIn";
// import Menu from "../pages/Menu";
// import Deals from "../pages/Deals";
// import Bucket from "../pages/Bucket";
// import Home from "../pages/Home";





const header = ()=>{
 return (
    // <div className="headerContainer">
    //     <img className="img1" src={Logo} alt="kfc logo" width={"100px"} height={"50px"} />
    //     <ul className="navList">
    //         <li>
    //             <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //             <Link to="/Menu">Menu</Link>
    //         </li>
    //         <li>
    //             <Link to="/Deals">Deals</Link>
    //         </li>
    //         <li>
    //             <Link to="/signIn"><img className="sign" src={signin} alt="signin" width={"20px"} height={"20px"} ></img> Sign In</Link>
    //         </li>
    //         <li>
    //             <Link to="/bucket"><img className="bucket" src={bucket} alt="bucket" width={"20px"} height={"20px"} ></img>Bucket</Link>
    //         </li>
    //     </ul>
    // </div>
    <div className="headerContainer">
    <Navbar>
      {/* <Container> */}
        <Navbar.Brand>
          <img src={Logo} alt="kfc logo" width={"100px"} height={"50px"} />
        </Navbar.Brand>
          <Nav className="body">
          <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="Menu">Menu</Link></Nav.Link>
            <Nav.Link ><Link to="Deals">Deals</Link></Nav.Link>
            <Nav.Link ><Link to="SignIn"><img className="sign" src={signin} alt="signin" width={"20px"} height={"20px"} ></img> Sign In</Link></Nav.Link>
            <Nav.Link ><Link to="Bucket"><img className="bucket" src={bucket} alt="bucket" width={"20px"} height={"20px"} ></img>Bucket</Link></Nav.Link>
          </Nav>
      {/* </Container> */}
    </Navbar>
    </div>
   
 );
};

export default header;