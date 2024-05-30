import logo from "./logo.svg";
import "./App.css";
import "./css/class.css";
import "./css/navSide.css";
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

import TaskPage from "./pages/TaskPage"
import "./css/taskPage.css"
import SplitTask from "./components/SplitTask";
import Webcode from "./pages/Webcode";
import SplitWebcode from "./components/SplitWebcode";
import CapstonePage from "./pages/CapstonePage";
import SplitCapstone from "./components/SplitCapstone";
import Dashboard from "./pages/Dashboard";
import MockInterview from "./components/MockInterview";
import Class from "./pages/Class.js";
import Layout from "./pages/Layout.js";
import Nopage from "./pages/Nopage.js";
import Profile from "./pages/Profile.js";
import LoginPage from "./pages/LoginPage.js";

function App() {




  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Class/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='tasks' element={<TaskPage/>}/>
      <Route path='webcode' element={<Webcode/>}/>
      <Route path='capstone' element={<CapstonePage/>}/>
      <Route path='/student/profile' element={<Profile/>}/>

      {/* <Route path='devops' element={<DevOps/>}/>
      <Route path='digitalmarketing' element={<DigitalMarketing/>}/>
      <Route path='fullstackdevelopment' element={<FullStackDevelopment/>}/> */}
      <Route path='*' element={<Nopage/>}/>

    </Route>
    <Route path='login' element={<LoginPage/>}/>

  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
