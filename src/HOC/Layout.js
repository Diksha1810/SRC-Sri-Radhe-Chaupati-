import React from "react";
import './layout.css'
function Layout(Component) {
  return function LoggedComponent(props) {
    console.log("Rendering:", Component.displayName || Component.name, props);
    return (
      <div className="d-flex noScrollbar" style={{maxWidth:"100vw",overflowX: 'auto'}}>
        <Component {...props} />;
      </div>
    );

  };
}

export default Layout;
