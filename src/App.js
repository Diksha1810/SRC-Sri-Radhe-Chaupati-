import { Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chaat from './components/chaat';
import Logout from './components/logout';
import Signin from "./components/signin";
import Layout from "./components/layout";
import Content from "./components/content";
import Contact from './components/contact';
import Chinese from './components/chinese';
import About from "./components/about";
import Tandoori from './components/tandoori';
import South from './components/south';
import Signup from './components/signup';
import Snacks from './components/snacks';
import Beverages from './components/beverages';
import Special from './components/special';
function App() {
  return (
    
  <>
 <Layout>
    
        <Routes>
        <Route path="/" element={<Signin />} />
          <Route path="*" element={<Content/>}/>
        <Route path="/signup" element={<Signup/>} />
       <Route path="contact" element={<Contact/>}/>
   <Route path="/chinese" element={<Chinese/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Tandoori" element={<Tandoori/>}/>
  <Route path="/Chaat"element={<Chaat/>}/>
<Route path="/South" element={<South/>}/>
<Route path="/Snacks"element={<Snacks/>}/>
<Route path="/Beverages" element={<Beverages/>}/>
<Route path="/logout"element={<Logout/>}/>
<Route path='/Special'element={<Special/>}/>
        </Routes>
    
      </Layout>
   </>
  );
}

export default App;
