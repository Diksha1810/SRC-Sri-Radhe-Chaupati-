import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="container">

                <h1 className="display-3 text-danger font-weight-bold text-center">
                    Sri Radhe Chaupati
                </h1>
                <h1 className="Display-2 text-success text-center">
                    “Good food will always welcome you back with a smile.”</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 claassName="text-center
                        ">About us</h1>
                        <div>We serve 100% veg food. We never compromise with the Quality.We maintained the same Quality since 2018</div>
                        <span><div className="">For  more information U can contact us:</div>
                            <Link to="/Contact"><button className="btn btn-primary">Contact us</button></Link>

                        </span>


                    </div>
                    <div className="col-sm-6">
                        

                    </div>
                </div>
            </div>
        </>
    )





}
export default About;