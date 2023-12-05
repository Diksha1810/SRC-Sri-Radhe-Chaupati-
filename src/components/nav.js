import { Link, useNavigate } from "react-router-dom";

import { PiShoppingCartSimpleThin } from "react-icons/pi";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { PiUserSquareThin } from "react-icons/pi";
                                

import {IoIosNotificationsOutline} from "react-icons/io";

function Nav() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem("access_token")
        navigate("/")
    }
    return (
        <>
               
                <nav className="navbar navbar-expand-sm   abc" aria-label="Offcanvas navbar large">
                    <div className="container-fluid">
                   
            

                    <Link to="/content"> <img className="img1" src={img} /></Link>
                 
  
                    {/* <Link to="/" className="navbar-brand ml-auto"><img src={img1} classname=" bca " /></Link> */}
                
            <div class="collapse navbar-collapse " id="navbarSupportedContent">


                      
                   <input className="form-control w-50" type="text" placeholder="search here" /> 
                      
                    <ul className=" navbar-nav ml-auto mr-3 list-inline">
                        <li className="text-muted mr-3 ml-4 list-inline-item">
                            <Link to="/content" className="text-dark">Home</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <Link to="contact" className="text-dark">contact-us</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <Link to="/Form" className="text-dark mr-3">Orders</Link>
                        </li>
                        <li className="text-warning mr-3 list-inline-item">
                            <Link to="/about" className="text-dark mr-3">About</Link>
                        </li>

                    </ul>
           
<span className="text-dark ml-2"><IoIosNotificationsOutline size="2em" /></span>    

 <div className="dropdown text-danger">
 
<PiUserSquareThin size="2em"/>

<div class="dropdown-content">
 <p className="text-danger" onClick={logout}>Logout</p>
  <Link to="/logout" className="text-danger">Delete user</Link>

</div>
</div>
     
               <span className="text-dark ml-2 text-primary"><PiShoppingCartSimpleThin size="2em" /></span>
               </div>
               </div>

</nav>

         

        </>
    )
}
export default Nav;