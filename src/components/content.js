import img10 from "../images/chowmein-manchurian-recipe-dry.jpg";
import img3 from "../images/paneer1.jpeg";
import img4 from "../images/papri-chaat-04-500x375.jpg";
import img5 from "../images/b8bcinjg_south-indian-food_625x300_03_November_18.webp";
import img6 from "../images/a1d434d029dc2cb12de21a31acfa8d30.jpg";
import img7 from "../images/wp3056966.jpg";
import { FcLike } from "react-icons/fc";
import img8 from "../images/25c4488483d195b98210c9ed47f05e8a_original.avif";
import img9 from "../images/dahi-papdi-chaat-recipe-to-make-at-home-1920x1080.jpg";
import { Link } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";
import img from "../images/Dahi-Papdi-Chaat-2-3.jpg"
import logo from "../images/Sri Radhe Chaupati-logos_transparent.png";
import img11 from "../images/paneer1.jpeg";
import img12 from "../images/veghakkanoodles.jpeg";
import img13 from "../images/dahi-papdi-chaat-recipe-to-make-at-home-1920x1080.jpg";

function Content() {
    return (
        <>
            <div className="content">


                <div className="row mt-5 ">


                    <div className="col-sm-6 col-lg-6 my-auto">
                        <h4 className="text-center text-success  ">
                            We serve food With Love<span><FcLike /></span>
                        </h4>
                        <h1 className="text-center ">
                            Tell me what you eat, and I will tell you what you are.
                        </h1>
                        <div className="row">
                            <div className="col-sm-4">

                            </div>
                            <div className="col-sm-4">
                                <img src={logo} className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-sm-4">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={img11} className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-sm-4">
                                <img src={img12} className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-sm-4">
                                <img src={img13} className="img-fluid rounded-circle" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6 ">
                        <img src={img} className="img-fluid" />
                    </div>


                </div>

                <div className="row mt-5 p-2">
                    <div className="col-sm-6 col-lg-6">
                        <img src={img8} className="img-fluid " />
                    </div>
                    <div className="col-sm-6 col-lg-6 my-auto  ">
                        <h1 className=" ">Masala-malai chaap</h1>
                        <h5 className=" ">
                            Our best seller and most-loved item by customers is masala-malai chaap
                        </h5>
                        <h3 className="text-warning mt-3">Today's Special offer :1 coke(250ml) free with every masala-malai chaap order</h3>
                        <h3 className=" mt-5">To avail this offer<Link to="/Special"><button className=" btn btn-danger ml-3 ">Order Now</button></Link></h3>
                    </div>
                </div>
                <div className="row mt-5">

                    <div className="col-sm-6 col-lg-6 my-auto">
                        <h1 className="mx-auto  ">Bhalla-papadi chaat</h1>
                        <h5 className=" mt-4">"People who love to eat are always the best people." </h5>
                        <h3 className="text-warning">
                            So,Made your mood dark and happy <span className=""><VscSmiley /></span></h3>

                        <h3 className=" mt-3">
                            So Try our most liked Chaat<button className="btn btn-danger ml-3 hov">Order Now</button>
                        </h3>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <img src={img9} className="img-fluid img-thumbnail" />
                    </div>
                </div>
                <div className="row mt-5">

                    <div className="col-sm-4 col-lg-4 ">
                        <Link to="/Chinese"> <img src={img10} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center">Chinese-items </h2>
                    </div>
                    <div className="col-sm-4 col-lg-4 ">
                        <Link to="/Tandoori"> <img src={img3} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center"> Tandoori-items</h2>
                    </div>
                    <div className="col-sm-4 col-lg-4 ">
                        <Link to="/Chaat">   <img src={img4} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center">Chaat items</h2>

                    </div>
                </div>
            </div>
            <div className="">
                <div className="row mt-">
                    <div className="col-sm-4 col-lg-4 mt-3">
                        <Link to="/South">  <img src={img5} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center"> South Indian food</h2>
                    </div>
                    <div className="col-sm-4 col-lg-4 mt-3">
                        <Link to="/Snacks"> <img src={img7} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center">Snacks</h2>
                    </div>
                    <div className="col-sm-4 col-lg-4 mt-3">
                        <Link to="/Beverages">   <img src={img6} className="img-fluid img-thumbnail" /></Link>
                        <h2 className="text-center"> Beverages</h2>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Content;