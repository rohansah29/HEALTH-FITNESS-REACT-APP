import React,{useEffect, useRef,useContext, useState} from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "./AuthContextProvider";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Programs",
  },
  {
    path: "/membership",
    display: "Membership",
  },
  {
    path: "/track",
    display: "Track your fitness",
  },
];


const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const {filter,setFilter}=useContext(AuthContext);

  const isUserLoggedIn=()=>{
  // console.log("Rohan2",isAuthenticated);
    if(isAuthenticated){
      console.log("user is Authenticated verifying user");
      verifyUser();
    }else{
      console.log("No user is logged in");
    }
  }

  const verifyUser=()=>{
    // console.log(user.name)
    fetch(`https://healthandfitness.onrender.com/data`).then((res)=>{
      return res.json();
    }).then((data)=>{
      // console.log(user);
      let filteredData=data.filter((el)=>el.user==user.name);
      // console.log(filteredData);
      setFilter(filteredData);
      if(filteredData.length<1){
        let obj={
          "id": Math.floor(Math.random() * 100),
          "user": user.name,
          "userdata": []
        }
        fetch(`https://healthandfitness.onrender.com/data`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(obj) 
        })
        setFilter([obj]);
      }
    })
  }

    const headerRef =useRef(null);
    const headerFunc=()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add("sticky__header");
      }  else{
        headerRef.current.classList.remove("sticky__header");
      }
    }
    useEffect(()=>{
        window.addEventListener("scroll",headerFunc);

        return()=>window.removeEventListener("scroll",headerFunc);
    },[])


    useEffect(()=>{
      isUserLoggedIn();
    },[setFilter,isAuthenticated])

    const handleLogOut=()=>{
      logout({ returnTo: window.location.origin })
    }

    const handleLogIn=()=>{
      loginWithRedirect();
    }

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Health & Fitness</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                // <li className="nav__item">
                //   <a href={item.path}>{item.display}</a>
                // </li>
                <NavLink className="nav__item" key={item.path} to={item.path}>{item.display}</NavLink>
              ))}
            </ul>
          </div>
          <div className="nav__right">
          {isAuthenticated && (
              <p className="nav__item"> {user.name} </p>
          )}
            {isAuthenticated?<button className="register__btn" onClick={handleLogOut}>Log Out</button>:
            <button className="register__btn" onClick={handleLogIn}>Log In</button>}
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
