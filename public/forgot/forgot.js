import img from "../images/Sri Radhe Chaupati-logos_transparent.png";
import { Link } from "react-router-dom";
function Forgot(){
    const  generateOTP=()=>{
        const digits='0123456789';
        let otp='';
        for(let i=0;i<6;i++){
            const randonIndex=Math.floor(Math.random()*digits.length);
            otp +=digits[randonIndex];
        }
        return otp;
    }
    const otp = generateOTP();
    alert(otp);
    return(
        <>
                   <div className="bg">
           <div className="box">
       
          <div className="my-auto bg-light w-25 p-5 ">
          <div className="text-center">
                            <img src={img} className="adjusting mx-auto"/>
                            </div>
                            <h1>Forgot Password</h1>
                            <input type="tel" className="form-control mt-2" placeholder="Enter your number"/>
                            <button className="btn bg" onClick={ generateOTP}>Generate OTP</button>
</div>
</div>
</div>
        </>
    )
}
export default Forgot