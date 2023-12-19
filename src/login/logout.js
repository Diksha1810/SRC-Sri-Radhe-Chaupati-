import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { Link, useNavigate} from "react-router-dom";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";

import 'react-toastify/dist/ReactToastify.css';

import React from 'react'; 


function Logout() {
    const [state, setState] = useState({
        mail: "",
        pass1: ""
    })
    const [err, setErr] = useState({})

    const [password, setPassword] = useState(false)
const Navigate=useNavigate();


    const click = (e) => {
        setErr("");
        setState({ ...state, [e.target.name]: e.target.value });
      
    };  
  
    
    
    const Validate = () => {
        const { mail, pass1 } = state;
        let formIsValid=true
        if (!mail) {
            err.mail = "enter valid data"
            formIsValid= false
        };
        if (!pass1) {
            err.pass1 = "enter valid password"
        formIsValid=false
    };

        setErr(err)
        return formIsValid

    }
  

    const handleFormSubmit = (e) => {
localStorage.removeItem("state")
Navigate("/")
        e.preventDefault();
       
        if (Validate()) {
            console.log("form is submitted");
            Navigate("/")
        }
}

    return (
        <>
        <div className="bg ">
            
                <div className="box">
                  

                    <div className=" my-auto p-5 back rounded w-25">


                    <div className="text-center">
                            <img src={img} className="adjusting mx-auto"/>
                            </div>
                            <h1 className="text-center text-light">User Delete</h1>
                            <input className="form-control mt-2" type="email" value={state?.mail} name="mail" onChange={click} placeholder="Enter your Eamil-id" />
                            {err.mail && <div className="text-danger">{err.mail}</div>}
                            <div className="input-group">
                                <input className="form-control mt-2 " type={password ? "text" : "password"} value={state?.pass1} name="pass1" onChange={click} placeholder="Enter your Password" />
                                <div className="input-group-append mt-2">
                                    <span className="input-group-text" onClick={() => setPassword(!password)}>
                                        {password ? <AiFillEye /> : <AiFillEyeInvisible />}

                                    </span>
                                </div>
                            </div>
                            {err.pass1 && <div className="text-danger">{err.pass1}</div>}
                            <br />
                            <div className="text-danger">
                            <button type="submit " onClick={handleFormSubmit} className="btn btn-danger text-center">Delete</button>
                            </div>


                    </div>
                </div>
        
            
</div>

        </>
    )
}

export default Logout;