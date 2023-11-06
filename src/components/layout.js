import Page from "./page";
import HideNav from "./hide";
import Footer from "./footer";
function Layout({ children }) {
    return (
        <>
        
<HideNav>
<Page />
</HideNav>
           <div className="container-fluid">   
                <div className="content-wrapper">
                    {children}
                </div>
                <HideNav>
               <Footer/>
                
              </HideNav>
            </div>
        </>
    )
}
export default Layout;