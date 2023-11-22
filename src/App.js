import { Route, Routes,Navigate,useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chaat from './components/chaat';
import Logout from './components/logout';
import Signin from "./components/signin";
import Layout from "./components/layout";
import Content from "./components/content";
import Contact from './components/contact2';
import Chinese from './components/chinese';
import About from "./components/about";
import Tandoori from './components/tandoori';
import South from './components/south';
import Signup from './components/signup';
import Snacks from './components/snacks';
import Beverages from './components/beverages';
import Special from './components/special';
import Error from './components/error';



const PrivateRoutes = () => {

  return (
    <>
  <Layout>
        <Routes>
 <Route path="/Content" element={<Content />} />
   <Route path="contact" element={<Contact />} />
   <Route path="/chinese" element={<Chinese />} />
   <Route path="/about" element={<About />} />
   <Route path="/Tandoori" element={<Tandoori />} />
   <Route path="/Chaat" element={<Chaat />} />
   <Route path="/South" element={<South />} />
   <Route path="/Snacks" element={<Snacks />} />
   <Route path="/Beverages" element={<Beverages />} />
  
   <Route path='/Special' element={<Special />} />

   <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout> 
         </>
  );
}
function App() {
  const token = localStorage.getItem("access_token");
  console.log(token,"dnekdneiu")
  const location = useLocation();
  if (location.pathname == '/') {
    if (token!=null) {
    console.log(token)
      return (<Navigate to="/Content "/>);
    }
 }

  return (
    <>
      {token!=null ? 
        <PrivateRoutes/> :
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path='*' element={<Error/>} />
        </Routes >
      }
    </ >
  );
}

   


export default App;
