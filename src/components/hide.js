import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
function HideNav({children}){

    const [showNavbar , setShowNavbar] = useState(false);
  
    const location=useLocation();
  useEffect(() =>{
    console.log("this is location",location)
     if(location.pathname==='/' || location.pathname==='/signup'||location.pathname==="/logout"){
        setShowNavbar(false)
  
    }
   
    else{
        setShowNavbar(true)
     
    }
  },[location])



return(
    <>
    {showNavbar && children}
  
    </>
)
    
}
export default HideNav;