import "./App.css";
import { useEffect,useContext } from "react";
import Aos from "aos"
import Footer from "./UI/Footer";
import Header from "./component/Header";
import AllRoutes from "./component/AllRoutes";
import Login from "./UI/LogIn/Login";


function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  return <>
  <Header/>
  <AllRoutes/>
  <Footer/>
  {/* <Login/> */}
  </>;
}

export default App;
