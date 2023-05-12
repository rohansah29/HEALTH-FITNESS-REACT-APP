import React from 'react'
import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [filter,setFilter] = useState("");

    // const verifyUser=()=>{
    //     fetch(`https://healthandfitness.onrender.com/data`).then((res)=>{
    //       return res.json();
    //     }).then((data)=>{
    //       let filteredData=data.filter((el)=>el.user==user.name);
    //     //   console.log(filteredData);
    //       setFilter(filteredData);
    //       if(filteredData.length<1){
    //         let obj={
    //           "user": user.name,
    //           "userdata": []
    //         }
    //         fetch(`https://healthandfitness.onrender.com/data`,{
    //           method:"POST",
    //           headers:{
    //             "Content-Type":"application/json",
    //           },
    //           body:JSON.stringify(obj) 
    //         })
    //       }
    
    //     })
    //   }
    //   useEffect(()=>{
    //     verifyUser();
    //   },[setFilter])
    


    return <AuthContext.Provider value={{filter,setFilter}}>{children}</AuthContext.Provider> 
}

export default AuthContextProvider
