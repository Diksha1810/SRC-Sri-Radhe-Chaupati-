import Nav from "./nav";
import HideNav from "./hide";
import Footer from "./footer";
import Toggle from "./toggle";
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