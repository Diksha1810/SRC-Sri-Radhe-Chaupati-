import Nav from "./nav";
import Toggle from "./toggle";
import Footer from "./footer";

function Layout({ children }) {
    return (
        <>
   

<Nav/>
<Toggle/>

           <div className="container-fluid">   
                <div className="content-wrapper">
           
                    {children}
        
                </div>
                </div>
              <Footer/>
              
                
            
        </>
    )
}
export default Layout;