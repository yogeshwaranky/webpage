import './App.css';
//import './assets/sb-admin-2.min.css';
import './assets/admin.css';
import Sidebar from './component/Sidebar';
import Topbar from './component/Topbar';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';
import Table from './component/Table';
import Charts from './component/Charts';
import Createuser from './Createuser';
import Button from './component/Button';
import Cardcomp from './component/Cardcomp';
import Colors from './component/Colors';
import Login from './component/Login';
import {BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/tables" element={<Table/>}/>
                            <Route path="/tables/createuser" element={<Createuser/>}/>
                            <Route path="/charts" element={<Charts/>}/>
                            <Route path="/buttons" element={<Button/>}/>
                            <Route path="/cards" element={<Cardcomp/>}/>
                            <Route path="/colors" element={<Colors/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                        </div>
                  </div> 
              <Footer/>   
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
