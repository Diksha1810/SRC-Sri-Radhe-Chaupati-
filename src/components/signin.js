import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import img from "../images/61I7vjhsJ4L.jpg";
import { Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   const Nav=
 useNavigate();


  
    
    const Validate = () => {
        const { mail, pass1 } = state;
        let formIsValid=true
        if (!mail) {
            err["mail"] = "enter valid data"
            formIsValid= false
        };
        if (!pass1) {
            err.pass1 = "enter valid password"
        formIsValid=false
    };

        setErr(err)
        return formIsValid

    }
    const msg=()=>toast.error("Invalid user you have to signup  again");

    const handleFormSubmit = (e) => {

        e.preventDefault();
        const data=JSON.parse(localStorage.getItem("state"))

        if(data &&data.mail===state.mail&& data.pass1===state.pass1){
 Nav("*")
        }

        else{

            msg()
           
          
        }
        if (Validate()) {
            console.log("form is submitted");

        }
}

    return (
        <>
           
           <div className="head">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-lg-6 my-auto p-5 bg-light ">
                        <form onSubmit={handleFormSubmit}>
                            <h1 className="text-center text-light">Signin</h1>
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
                            <button type="submit " className="btn btn-primary text-center">Signin</button>
                            <p className="text-primary text-center">Dont have account??<Link to="signup"><span className="text-danger font-weight-bold">Signup</span></Link></p>
                        </form>
                        </div>
</div>
            <ToastContainer/>
</div>

        </>
    )
}

export default Signin;