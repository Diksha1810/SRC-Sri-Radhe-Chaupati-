import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa"
function Toggle() {
  const [theme, setTheme] = useState("light-theme")
  const toggleTheme = () => {
    if (theme =="dark-theme") {
      setTheme('light-theme');
      console.log("hello"); 

    }
    else {
      setTheme("dark-theme")
    }
  };

  useEffect(() => {
    document.body.className = theme;


  }, [theme]);

  return (
    <>
      <div className="container-fluid">
<div className="toggle-theme">   


 <button type="button" className="btn border btn-light "onClick={toggleTheme}><FaMoon size="3em" className="text-danger"/></button>
    
</div>

     

      </div>
    </>
  )
}
export default Toggle 