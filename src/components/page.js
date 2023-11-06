import { Link, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { PiUserSquareThin } from "react-icons/pi";
                                

import {GrNotification} from "react-icons/gr";

function Page() {
 
    const navigate = useNavigate();
    const logout = () => {
      
        navigate("/")
    }
    return (
        <>
               
                <nav className="navbar navbar-expand-sm   navbar-fixed-top abc" aria-label="Offcanvas navbar large">
                    <Link to="*"> <img className="img1" src={img} /></Link>
                 
  
                    {/* <Link to="/" className="navbar-brand ml-auto"><img src={img1} classname=" bca " /></Link> */}
                    
                      
                   <input className="form-control w-50" type="text" placeholder="search here" /> 
                      
                    <ul className=" navbar-nav ml-auto mr-3 list-inline">
                        <li className="text-muted mr-3 ml-4 list-inline-item">
                            <Link to="*" className="text-dark">Home</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <Link to="contact" className="text-dark">contactus</Link>
                        </li>
                        <li className="text-dark mr-3 list-inline-item">
                            <a href="template1.html" className="text-dark mr-3">Orders</a>
                        </li>
                        <li className="text-warning mr-3 list-inline-item">
                            <a href="/about" className="text-dark mr-3">About</a>
                        </li>

                    </ul>
                    {/* <div class="dropdown">

<button className="btn btn-danger" onClick={()=>setIsOpen(!isOpen)}><PiUserSquareThin/><i class="caret"></i>
</button>
{isOpen &&(
<div className="d-block">
<p onClick={logout} className="text-dark">Logout</p>
  <Link to="/logout"><p className="text-dark">Delete</p></Link>
 
</div>
)}
</div> */}
<Link to=""> <span className="text-dark ml-2"><GrNotification size="2em" /></span></Link>
<Link to="/"> <span className="text-dark ml-2"><PiUserSquareThin size="2em" />
</span>

</Link>
     
                <Link to=""> <span className="text-dark ml-2"><PiShoppingCartSimpleThin size="2em" /></span></Link>
</nav>

         

        </>
    )
}
export default Page;