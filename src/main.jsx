import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

import {Home} from "./components/Services/index.js"
import AdminDashboard from './components/Admin-Dashboard/AdminDashboard.jsx'
import AppProvider from './contexts/AppProvider.jsx'

import SingleStudent from './components/Admin-Dashboard/SingleStudent/SingleStudent.jsx'
import NewForm from './components/ScholarshipForms/NewForm.jsx'
import RegisteredStudent from './components/ScholarshipForms/RegisteredStudent.jsx'
import Choice from './components/Choice/Choice.jsx'
import Login from './components/login/Login.jsx'
import LoginType from './components/Logintype/LoginType.jsx'
import Donate from './components/Donate/Donate.jsx'
import About from './components/About/About.jsx'
import Alumni from './components/Alumni/Alumni.jsx'
import UserTable from './components/UserTable.jsx'
import Error from './components/Error/Error.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path='/admin' element={<AdminDashboard/>}></Route>

      <Route path='/userVerfication/:name' element={<SingleStudent/>}/>
     
      {/* <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="footer-contact" element={<FooterContact/>}/>
      <Route path="footer-KnowTheTeam" element={<FooterKnowTheTeam/>}/>
      <Route path="footer-reference" element={<FooterReference/>}/> */}
      <Route path="/logintype" element={<LoginType/>}/>
      <Route path="/login/:userType" element={<Login/>}/>
      <Route path="/registration" element={<NewForm/>}/>
      <Route path="/registeredStudent" element={<RegisteredStudent/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/choice" element={<Choice/>}/>
      <Route path="/alumni" element={<Alumni/>}/>
      <Route path="/userinfo" element={<UserTable/>}/>
      
      <Route path="/students" element={<UserTable/>}/>
      <Route path="/error" element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router}/>
    </AppProvider>
  </React.StrictMode>,
)
