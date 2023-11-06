import {BsWhatsapp} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiLogoFacebookSquare} from "react-icons/bi";
import {BsInstagram} from "react-icons/bs";
import {BiPhoneOutgoing} from "react-icons/bi";
import logo from "../images/Sri Radhe Chaupati-logos_transparent.png";
function Footer(){
return(
    <>

        <div className="abc">
    <div className="row mt-3 p-5">
        <div className="col-sm-2 ">
<img className="img-fluid " src={logo}/>
        </div>
    
        <div className="col-sm-2">
            <h3>Get to Know Us</h3>
           < ul className=" navbar-nav ml-auto mr-3 list-inline">
                        <li className="text-muted mr-4 list-inline-item">
                            <Link to="*" className="text-dark">Home</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <Link to="contact" className="text-dark">contact us</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <a href="template1.html" className="text-dark mr-3">Orders</a>
                        </li>
                        <li className="text-warning mr-3 list-inline-item">
                            <a href="/about" className="text-dark mr-3">About</a>
                        </li>

                    </ul>
        </div>
     <div className="col-sm-2">
        <h3>Follow us</h3>
        <ul>
       
            <li> <span className="text-success "><BsWhatsapp size=""/></span>
                Whatsapp 
                </li>
            <li>
            <span className="text-primary"><BiLogoFacebookSquare/></span> Facebook
            </li>
            <li><span className="insta" ><BsInstagram/></span> Instagram</li>
            <li><span><BiPhoneOutgoing/></span>Calling</li>
        </ul>
     </div>
     <div className="col-sm-2 mt-4">
        <form>
            <input type="email" className="form-control" placeholder="Enter your email"/><button className="btn btn-warning mt-2">Subscribe</button>
        </form>
     </div>
     <div className="col-sm-2">
        <h3>About us</h3>
        <p>We never Compromise with our Qulaity.We deal with best quality since 2018</p>
       
        <p className="text-success font-weight-bold">100% pure Veg Quality</p>
     </div>
     <div className="col-sm-2">
     <img className="img-fluid " src={logo}/>
     </div>
    </div>
</div>


    </>
)
}
export default Footer