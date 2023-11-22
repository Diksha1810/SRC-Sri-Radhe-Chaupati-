import img from "../images/61I7vjhsJ4L.jpg";
import {FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";
function About() {
    return (
        <>
          <div className="content">
               
                    <div className="container">

                    <h1 className="display-3 text-danger font-weight-bold text-center">
                        Sri Radhe Chaupati
                    </h1>
                    <h1 className="Display-2 text-success text-center">
                        “Good food will always welcome you back with a smile.”</h1>
                       <span><h1 className="text-center">You can also connect and read about us through google:</h1></span> 
                       <div className="text-center"><FcGoogle size="3em"/><Link to="https://restaurant-guru.in/Shri-Sai-Chat-House-Hajipur-Punjab"> Visit on google </Link></div>
                  
                        

                    <img className="img-fluid mx-auto d-block " src={img} /> 
                    </div>
 <h1 className="Display-2 text-center ">
                        "The secret of success in life is to eat what you like and let the food fight it out inside."</h1>
                </div>
         
        </>
    )
}
export default About;