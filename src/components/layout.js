import Nav from "./nav";
import HideNav from "./hide";
import Footer from "./footer";
function Layout({ children }) {
    return (
        <>
   

<Nav/>


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