import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import img from "../images/61I7vjhsJ4L.jpg";
import { Link, useNavigate} from "react-router-dom";

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
        <div className="head">
            
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <img src={img} className="img-fluid" />
                    </div>

                    <div className="col-sm-6 col-lg-6 my-auto p-5 bg-light">


                        <form className="adjust border border-dark my-auto">
                            <h1 className="text-center text-danger">User Delete</h1>
                            <input className="form-control" type="email" value={state?.mail} name="mail" onChange={click} placeholder="Enter your Eamil-id" />
                            {err.mail && <div className="text-danger">{err.mail}</div>}
                            <div className="input-group">
                                <input className="form-control " type={password ? "text" : "password"} value={state?.pass1} name="pass1" onChange={click} placeholder="Enter your Password" />
                                <div class="input-group-append">
                                    <span class="input-group-text" onClick={() => setPassword(!password)}>
                                        {password ? <AiFillEye /> : <AiFillEyeInvisible />}

                                    </span>
                                </div>
                            </div>
                            {err.pass1 && <div className="text-danger">{err.pass1}</div>}
                            <br />
                            <button type="submit " onClick={handleFormSubmit} className="btn btn-danger text-center">Delete</button>
                            
                        </form>

                    </div>
                </div>
        
            
</div>

        </>
    )
}

export default Logout;