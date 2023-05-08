import React from "react";
import { useState } from "react";  
import { AuthContext } from "../component/AuthContextProvider";
import { useContext } from "react";
import Swal from 'sweetalert2';

const Track = () => {
  const[name,setName] = useState("");
  const[activity,setActivity] = useState("");
  const[weight,setWeight] = useState("");
  const[fat,setFat] = useState("");
  const[bmi,setBMI] = useState("");
  const [postdate,setPostDate] =useState("");
  const [data,setData] = useState([]);

  const {filter}=useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj={
      workout_name:name,
      activity:activity,
      weight:weight,
      fat:fat,
      bmi:bmi,
      date:postdate
    }
    setData([...data,obj]);
    fetch(`https://healthandfitness.onrender.com/data/${filter[0].id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({userdata:data})
    })
    Swal.fire({
      position: 'top-mid',
      icon: 'success',
      title: 'Your Data has been Added.',
      showConfirmButton: false,
      timer: 1500
    })
  };
  // console.log(data);
  return (
    <div className="container">
      <h1>Your fitness Dashboard</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Workout name :
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
          </label>
          <br />
          <label>
            Activity :
            <select name="type" onChange={(e)=>setActivity(e.target.value)}>
              <option value="">Select Restaurant Type</option>
              <option value="cardiovascular_exercise">Cardiovascular exercise</option>
              <option value="strength_training">Strength training</option>
              <option value="group_fitness_classes">Group fitness classes</option>
              <option value="High_intensity_interval_training">High-intensity interval training</option>
            </select>
          </label>
          <br />
          <label>
            Body Weight :
            <input
              type="number"
              name="Weight"
              onChange={(e)=>setWeight(e.target.value)}
            />
          </label>
          <br />
          <label>
            Body Fat :
            <input
              type="number"
              name="body_fat"
              onChange={(e)=>setFat(e.target.value)}
            />
          </label>
          <br />
          <label>
            BMI :
            <input
              type="number"
              name="price_starts_from"
              onChange={(e)=>setBMI(e.target.value)}
            />
          </label>
          <br />
          <label>Date: </label>
          <input type="date" data-testid="date" onChange={(e)=>setPostDate(e.target.value)}></input>
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Track;
