import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import img from "../images/61I7vjhsJ4L.jpg";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [password, setPassword] = useState(false);
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
const navigate = useNavigate()
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
        formIsValid =false
      newErrors.num = "Mobile number is required";
    } else if (!/^\d+$/.test(num)) {
      newErrors.num = "Invalid mobile number";
    }

    // Validate password (required and minimum length)
    if (!pass1) {
        formIsValid=false
      newErrors.pass1 = "Password is required";
    } else if (pass1.length < 6) {
      newErrors.pass1 = "Password must be at least 6 characters";
    }

    // Validate password confirmation (must match password)
    if (pass1 !== pass2) {
        formIsValid=false
      newErrors.pass2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return formIsValid;

    // Check if there are any validation errors
    
  };

  const click = (e) => {
    setState({...state, [e.target.name]: e.target.value });
    setErrors("")
  };

  const handleFormSubmit = (e) => {
   e.preventDefault()
  localStorage.setItem("state",JSON.stringify(state))
 

    if (validateForm()) {
      navigate("/")
      // Form is valid, you can proceed with submission or API request
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form has validation errors. Please correct them.");
    }
  };

  return (
    <>
      <div className="head">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <img src={img} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-lg-6 my-auto p-5 bg-light ">
            <form className=" border border-dark my-auto"onSubmit={handleFormSubmit}>
              <h1 className="text-dark text-center">Welcome!!!!!</h1>
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
                className="form-control"
                type="email"
                value={state?.mail}
                name="mail"
                onChange={click}
                placeholder="Enter your Email-id"
              />
              {errors.mail && <div className="text-danger">{errors.mail}</div>}
              <input
                className="form-control"
                type="tel"
                value={state?.num}
                name="num"
                onChange={click}
                placeholder="Enter your Mobile number"
              />
              {errors.num && <div className="text-danger">{errors.num}</div>}
              <div className="input-group">
                <input
                  className="form-control"
                  type={password ? "text" : "password"}
                  value={state.pass1}
                  name="pass1"
                  onChange={click}
                  placeholder="Enter your Password"
                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={() => setPassword(!password)}>
                    {password ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                </div>
              </div>
              {errors.pass1 && <div className="text-danger">{errors.pass1}</div>}
              <input
                className="form-control"
                type="password"
                value={state?.pass2}
                name="pass2"
                onChange={click}
                placeholder="Confirm your password"
              />
              {errors.pass2 && <div className="text-danger">{errors.pass2}</div>}
          <button type="submit"  className="btn btn-success d-flex justify-content-center">
                Sign-up
              </button>
              <p className="text-primary text-center">
                Already have an account? <Link to="/">Signin</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
