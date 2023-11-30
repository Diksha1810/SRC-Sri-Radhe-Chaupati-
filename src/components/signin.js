import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import React from 'react';


function Signin() {
  const [state, setState] = useState({
    mail: "",
    pass1: ""
  })
  const [err, setErr] = useState({})

  const [password, setPassword] = useState(false)
  const click = (e) => {
    setErr("");
    setState({ ...state, [e.target.name]: e.target.value });

  };
const navigate = useNavigate();



  const Validate = () => {
    const { mail, pass1 } = state;
    let formIsValid = true
    if (!mail) {
      err["mail"] = "enter valid data"
      formIsValid = false
    };
    if (!pass1) {
      err.pass1 = "enter valid password"
      formIsValid = false
    };

    setErr(err)
    return formIsValid

  }


  const handleFormSubmit = (e) => {

    e.preventDefault();
    let data = JSON.stringify({
      "email": state.mail,
      "password": state.pass1,

    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://huntfish.deploywork.com:4438/api/v1/auth/login',
      headers: {
        'Content-Type': 'application/json',

      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        localStorage.setItem("access_token",JSON.stringify(response.data.body.token));
        console.log(JSON.stringify(response.data));

        if(response.data.body){
          navigate("/Content");
          toast.success(response.data.message)
        }
        else{
          toast.error(response.data.message)
        }
      
// window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });




    // if (Validate()) {
    //     console.log("form is submitted");

    // }
  }

  return (
    <>

      <div className="bg">
        <div className="box">

          <div className="back rounded w-25  my-auto">
            <form onSubmit={handleFormSubmit} className="form-group my-">
              <div className="text-center"><span ><Link to="/"><button className="btn btn-outline-primary    text light ">Signin</button> </Link>
                <span>  <Link to="signup"> <button className="btn btn-outline-success btn-">Signup </button></Link></span>  </span>
              </div>

              <div className="text-center">
                <img src={img} className="adjusting mx-auto img-fluid" />
              </div>
              <input className="form-control " type="email" value={state?.mail} name="mail" onChange={click} placeholder="Enter your Eamil-id" />
              {err.mail && <div className="text-danger">{err.mail}</div>}
              <div className="input-group">
                <input className="form-control  mt-2 " type={password ? "text" : "password"} value={state?.pass1} name="pass1" onChange={click} placeholder="Enter your Password" />
                <div class="input-group-append">
                  <span class="input-group-text mt-2" onClick={() => setPassword(!password)}>
                    {password ? <AiFillEye /> : <AiFillEyeInvisible />}

                  </span>
                </div>
              </div>
              {err.pass1 && <div className="text-danger">{err.pass1}</div>}
              <br />

              <div className="text-center">
                <button type="submit " className="btn btn-primary   ">Signin</button>

              </div>


              <p className="text-primary text-center mt-3">Don't have account??<Link to="/signup">Signup</Link></p>
            </form>
          </div>
        </div>
        <ToastContainer />

      </div>
    </>
  )
}

export default Signin;