import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { PiUserSquareThin } from "react-icons/pi";

import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
function Nav() {
  const cartProducts = useSelector((state) => state.cart);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg   abc">
        <Link to="/content">
            
          {" "}
          <img className="img1" src={img} />
        </Link>
        <input
          className="form-control w-50"
          type="Search"
          placeholder="search here"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="">
            <FiAlignJustify size="2em" />
          </span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id=""
        >
          <ul className=" navbar-nav ml-auto mr-3 list-inline d-inline">
            <li className="text-muted mr-3 ml-4 list-inline-item">
              <Link to="/content" className="text-dark">
                Home
              </Link>
            </li>
            <li className="text-dark mr-3 list-inline-item">
              <Link to="contact" className="text-dark">
                contact-us
              </Link>
            </li>
            <li className="text-dark mr-3 list-inline-item">
              <Link to="/Form" className="text-dark mr-3">
                Orders
              </Link>
            </li>
            <li className="text-warning mr-3 list-inline-item">
              <Link to="/about" className="text-dark mr-2">
                About
              </Link>
            </li>
          </ul>

          <span className="text-dark ml-2">
            <IoIosNotificationsOutline size="2em" />
          </span>

          <div className="dropdown text-danger d-inline">
            <PiUserSquareThin size="2em" />

            <div className="dropdown-content ">
              <p className="text-danger" onClick={logout}>
                Logout
              </p>
              <Link to="/logout" className="text-danger">
                Delete user
              </Link>
            </div>
          </div>

         <Link to ="/Cart"><button type="button" className="btn btn-">
            <PiShoppingCartSimpleThin size="2em" />
            <span className="badge badge-light">{cartProducts.length}</span>
          </button></Link> 
        </div>
      </nav>
    </>
  );
}
export default Nav;
