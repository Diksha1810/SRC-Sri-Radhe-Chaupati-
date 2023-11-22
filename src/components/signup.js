import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { Link, } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [password, setPassword] = useState(false);
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {

    const { pass1, pass2, userName, mail, num } = state;
    const newErrors = {};
    let formIsValid = true

    // Validate full name (required)
    if (!userName) {
      formIsValid = false
      newErrors.userName = "Full name is required";
    }
    else if (userName.length < 3) {
      formIsValid = false
      newErrors.userName = "Enter-valid name";
    }

    // Validate email (required and basic format)
    if (!mail) {
      formIsValid = false
      newErrors.mail = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(mail)) {
      newErrors.mail = "Invalid email format";
    }

    // Validate mobile number (required and numeric)
    if (!num) {
      formIsValid = false
      newErrors.num = "Mobile number is required";
    } else if (!/^\d+$/.test(num)) {
      newErrors.num = "Invalid mobile number";
    }

    // Validate password (required and minimum length)
    if (!pass1) {
      formIsValid = false
      newErrors.pass1 = "Password is required";
    } else if (pass1.length < 6) {
      newErrors.pass1 = "Password must be at least 6 characters";
    }

    // Validate password confirmation (must match password)
    if (pass1 !== pass2) {
      formIsValid = false
      newErrors.pass2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return formIsValid;

    // Check if there are any validation errors

  };

  const click = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErrors("")
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let data = JSON.stringify({
      "full_name": state.userName,
      "email": state.mail,
      "password":state.pass1,
      "confirm_password": state.pass2
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://huntfish.deploywork.com:4438/api/v1/auth/sign-up',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("access_token",JSON.stringify(response.data.body.token));

     
      
    })
    .catch((error) => {
      console.log(error);
    });
    
  };

  return (
    <>
      <div className="bg">
        <div className="box">
          <div className="my-auto back rounded w-25 p-5 ">



            <form onSubmit={handleFormSubmit}>
              <span ><Link to="/"><button className="btn btn-outline-primary mr-5  text light btn-lg">Signin</button> </Link>
                <Link to="/signup"> <button className="btn btn-outline-success btn-lg">Signup </button></Link></span>
              <div className="text-center">
                <img src={img} className="adjusting mx-auto" />
              </div>
              <input
                className="form-control no-border "
                type="text"
                value={state?.userName}
                name="userName"
                onChange={click}
                placeholder="Enter your full name"
              />
              {errors.userName && <div className="text-danger">{errors.userName}</div>}
              <input
                className=" form-control mt-2"
                type="email"
                value={state?.mail}
                name="mail"
                onChange={click}
                placeholder="Enter your Email-id"
              />
              {errors.mail && <div className="text-danger">{errors.mail}</div>}
              <input
                className=" form-control mt-2"
                type="tel"
                value={state?.num}
                name="num"
                onChange={click}
                placeholder="Enter your Mobile number"
              />
              {errors.num && <div className="text-danger">{errors.num}</div>}
              <div className="input-group">
                <input
                  className=" form-control mt-2"
                  type={password ? "text" : "password"}
                  value={state.pass1}
                  name="pass1"
                  onChange={click}
                  placeholder="Enter your Password"
                />
                <div className="input-group-append">
                  <span className="input-group-text mt-2" onClick={() => setPassword(!password)}>
                    {password ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
              </div>
              {errors.pass1 && <div className="text-danger">{errors.pass1}</div>}
              <input
                className=" form-control mt-2"
                type="password"
                value={state?.pass2}
                name="pass2"
                onChange={click}
                placeholder="Confirm your password"
              />
              {errors.pass2 && <div className="text-danger">{errors.pass2}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-success mt-4">
                  Sign-up
                </button>
              </div>
              <p className="text-primary text-center mt-3">
                Already have an account? <Link to="/">Signin</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
