
function OTP()
{
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
console.log('Your Otp is: ${otp}');
}
export default OTP;
