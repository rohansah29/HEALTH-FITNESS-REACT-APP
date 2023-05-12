import React from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../component/AuthContextProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import "../styles/track.css";

const Track = () => {
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [weight, setWeight] = useState("");
  const [fat, setFat] = useState("");
  const [bmi, setBMI] = useState("");
  const [postdate, setPostDate] = useState("");
  // const [data, setData] = useState([]);
  const [fitData, setFitData] = useState([]);
  const [btn,setBtn] = useState(false);
  const [loading,setLoading]=useState(false);

  const { filter } = useContext(AuthContext);

  // const fetchAndRender=()=>{
  //   fetch(`https://healthandfitness.onrender.com/data/${filter[0].id}`).then((res)=>{
  //     return res.json();
  //   }).then((data)=>{setData(data?.userdata)})
  // }

  // useEffect(()=>{
  //   fetchAndRender();
  // },[filter]);
  const getFitnessData = async () => {
    let res = await fetch(
      `https://healthandfitness.onrender.com/data/${filter[0].id}`
    );
    let json = await res.json();
    let data=json.userdata;
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFitData(data);
    // setData(data?.userdata);

    // console.log(data);
  };

  useEffect(() => {
    // getFitnessData();
    // console.log(filter,"Rohan");
    filter && filter[0] && filter[0].id && fetch(`https://healthandfitness.onrender.com/data/${filter[0].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userdata: fitData }),
        });
  }, [fitData, filter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filter);
    setLoading(true);
    // alert("It may take some time to show data on Dashboard, so please be patient.");

    let obj = {
      id: Math.floor(Math.random() * 100),
      workout_name: name,
      activity: activity,
      weight: weight,
      fat: fat,
      bmi: bmi,
      date: postdate,
    };

    setFitData([...fitData,obj]);
    Swal.fire({
          position: "top-mid",
          icon: "success",
          title: "Your Data has been Added.",
          showConfirmButton: false,
          timer: 1500,
        })
        setBtn(false);
    
  };

  return (
    <div className="container">
      
      <br/>
      <h1>
        Your <span className="highlights">fitness</span> Dashboard
      </h1>
      <h2>
        Add <span className="highlights">Data</span><span><button id="addnotice-btn" onClick={()=>setBtn(!btn)}>{btn?"x":"+"}</button></span>
      </h2>
      <div className="model" style={{display:btn?"flex":"none"}}>
        <div className="formCont">
        <form onSubmit={handleSubmit}>
          <label>
            Workout name :
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)} required
            />
          <br />
          <br/>
          <label>
            Activity :
          </label>
            <select name="type" onChange={(e) => setActivity(e.target.value)} required>
              <option value="">Select Restaurant Type</option>
              <option value="cardiovascular_exercise">
                Cardiovascular exercise
              </option>
              <option value="strength_training">Strength training</option>
              <option value="group_fitness_classes">
                Group fitness classes
              </option>
              <option value="High_intensity_interval_training">
                High-intensity interval training
              </option>
            </select>
          <br />
          <br/>
          <label>
            Body Weight :
            </label>
            <input
              type="number"
              name="Weight"
              onChange={(e) => setWeight(e.target.value)} required
            />
          <br />
          <br/>
          <label>
            Body Fat :
            </label>
            <input
              type="number"
              name="body_fat"
              onChange={(e) => setFat(e.target.value)} required
            />
          <br />
          <br/>
          <label>
            Heart Rate :
            </label><br/>
            <input
              type="number"
              name="price_starts_from"
              onChange={(e) => setBMI(e.target.value)} required
            />
          <br />
          <br/>
          <label>Date: </label>
          <input
            type="date"
            data-testid="date"
            onChange={(e) => setPostDate(e.target.value)} 
            required></input>
          <br />
          <br/>
          <input id="btn" type="submit" onClick={handleSubmit} />
        </form>
        </div>
        
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Workout Name</th>
              <th>Activity</th>
              <th>Body Weight</th>
              <th>Body Fat %</th>
              <th>Heart Rate</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {fitData.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.workout_name}</td>
                  <td>{el.activity}</td>
                  <td>{el.weight} Kg</td>
                  <td>{el.fat}%</td>
                  <td>{el.bmi} BPM</td>
                  <td>{el.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Track;
