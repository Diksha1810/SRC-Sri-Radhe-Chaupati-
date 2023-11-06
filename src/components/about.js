import img from "../images/61I7vjhsJ4L.jpg";

function About() {
    return (
        <>
          <div className="content">
               
                    <div className="container-fluid">

                    <h1 className="display-3 text-danger font-weight-bold text-center">
                        Sri Radhe Chaupati
                    </h1>
                    <h1 className="Display-2 text-success text-center">
                        “Good food will always welcome you back with a smile.”</h1>

                    <img className="img-fluid mx-auto d-block " src={img} /> 
                    </div>
 <h1 className="Display-2 text-center ">
                        "The secret of success in life is to eat what you like and let the food fight it out inside."</h1>
                </div>
         
        </>
    )
}
export default About;