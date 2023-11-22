import {BsWhatsapp} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiLogoFacebookSquare} from "react-icons/bi";
import {BsInstagram} from "react-icons/bs";
import {BiPhoneOutgoing} from "react-icons/bi";
import logo from "../images/Sri Radhe Chaupati-logos_transparent.png";
import {FcGoogle} from "react-icons/fc";
function Footer(){
return(
    <>

        <div className="abc">
    <div className="row mt-3 p-5">
        <div className="col-sm-2 ">
<Link to="/content"><img className="img-fluid " src={logo}/></Link>
        </div>
    
        <div className="col-sm-2">
            <h3>Get to Know Us</h3>
           < ul className=" navbar-nav ml-auto mr-3 list-inline">
                        <li className="text-muted mr-4 list-inline-item">
                            <Link to="/content" className="text-dark">Home</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <Link to="/
                            contact" className="text-dark">contact us</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <a href="" className="text-dark mr-3">Orders</a>
                        </li>
                        <li className="text-warning mr-3 list-inline-item">
                            <a href="/about" className="text-dark mr-3">About</a>
                        </li>

                    </ul>
        </div>
     <div className="col-sm-2">
        <h3>Follow us</h3>
        <ul>
       
           <li className="text-dark ">  <Link to ="https://wa.me/9463749990"><span className="text-success "><BsWhatsapp size=""/></span>
               
                </Link>  Whatsapp</li>
           <li className="mt-2">
          <Link to="https://www.facebook.com/profile.php?id=100005529121740&mibextid=ZbWKwL"><span className="text-primary"><BiLogoFacebookSquare/></span> </Link> Facebook
            </li>
           <li className="mt-2"><Link to="https://instagram.com/pankajabbi38?igshid=NzZlODBkYWE4Ng=="><span className="insta" ><BsInstagram/></span> </Link>Instagram</li>
           <li className="mt-2">
            <Link to ="tel:9463749990" ><span><BiPhoneOutgoing/></span></Link>Calling</li>
            <li className= "mt-2 ">
  <Link to="https://restaurant-guru.in/Shri-Sai-Chat-House-Hajipur-Punjab"> <span className=""><FcGoogle size=""/></span> 
        </Link>
     Review us on google
    </li>
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