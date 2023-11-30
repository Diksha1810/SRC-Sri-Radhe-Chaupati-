import {BsFillTelephoneFill} from"react-icons/bs"
import {BsWhatsapp} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";

function  Contact(){
return(
    <>
<div className="container">
    <h1 className=" text-center display-4">Contact-Us</h1>
    <div className="row">
       
        <div className="col-sm-4 jumbotron">
<ul>
    <li className="font-weight-bold text-dark" >
    <Link to ="tel:9463749990"><span className="text-center mr-3 "><BsFillTelephoneFill size="2em"/>  </span></Link>  Call us 
        </li>
            <li className= "mt-4 font-weight-bold text-dark">

            <Link to="https://www.facebook.com/profile.php?id=100005529121740&mibextid=ZbWKwL"> <span className="text-primary mt-4 mr-3"> <FaFacebookSquare size="2em"/></span> </Link> Follow us on facebook
            </li>
        <li className= "mt-4 font-weight-bold text-dark">
        <Link to ="https://wa.me/9463749990"> <span className="text-success mt-4 mr-3"><BsWhatsapp size="2em"/></span></Link> Contact us via Whatsapp
    </li>
    <li className= "mt-4 font-weight-bold text-dark">
    <Link to="https://instagram.com/pankajabbi38?igshid=NzZlODBkYWE4Ng=="><span className="insta mt-4 mr-3"><GrInstagram size="2em"/></span></Link>Follow us on Instagram
    </li>
    <li className= "mt-4 font-weight-bold text-dark">
  <Link to="https://restaurant-guru.in/Shri-Sai-Chat-House-Hajipur-Punjab"> <span className="insta mt-4 mr-3"><FcGoogle size="2em"/></span> 
        </Link>
     Review us on google
    </li>
</ul>
<span className="text-center">
    <img src={img} className="logo"/>
</span>

        </div>
        <div className="col-sm-1 offset">

        </div>
        <div className="col-sm-7 jumbotron">
       

            <form className="form-group">
                <label className="text-dark">Enter your Name </label>
            <input type="text" className="form-control"/>
            <label className="text-dark">
                Enter Your Email-address
            </label>
            <input type="text" className="form-control"/>
            <label className="text-dark">Mention your Message:</label>
            <textarea class="form-control" rows="5" col="5" ></textarea>
            <div className="text-center mt-2">   <button type="submit" className="btn btn-warning btn-lg ">Send</button></div>
         
            </form>
        </div>
       
    </div>
</div>

    </>
)

}
export default  Contact;