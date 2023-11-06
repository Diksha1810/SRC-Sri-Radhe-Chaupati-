import {BsFillTelephoneFill} from"react-icons/bs"
import {BsWhatsapp} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";

function Contact() {
    return (

        <>


            <div className="row mt-5 ">
                <div className="col-sm-3 col-lg-3">
                    <span className="text-center"><BsFillTelephoneFill size="10em"/></span>
                    <h4 className="text-dark">We are free in your services<span className="text-primary"> 24X7</span>.you can freely call us anytime when you need us</h4>
                </div>
                <div className="col-sm-3 col-lg-3">
                   <span className="text-primary"> <FaFacebookSquare size="10em"/></span>
                    <h4 className ="text-dark" >You also contact us and follow us on facebook page <code>Pankaj Abbi</code></h4>
                </div>
                <div className="col-sm-3 col-lg-3">
                    <span className="text-success"><BsWhatsapp size="10em"/></span>
                    <h4 className="text-dark">
                        you will also contact us on Whatsapp number and also scan our Qr code<span><BsQrCode size="2em"/></span>
                    </h4>
                    </div>
<div className="col-sm-3 col-lg-3">
<span className="insta"><GrInstagram size="10em"/></span>
<h4 className="text-dark" >You also contact us and follow us on facebook page <code>Pankaj Abbi</code></h4>

                </div>

</div>
        </>
    )
}
export default Contact;