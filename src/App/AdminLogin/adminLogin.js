import React from 'react'
import './adminLogin.css'
import AdminHeader from '../Admin/adminHeader/adminHeader'
import {NavLink} from 'react-router-dom'
export default function AdminLogin() {
  return (
    <div className='adminLogin'>
            <div className="LoginPageheader">
                  <AdminHeader/>
            </div>
            <form className="inputDiv">
                  <span className="loginTitle">Login</span>
                  <input type="text" className="userNameInput loginInput" placeholder='Username' required/>
                  <input type="email" className='EmailInput loginInput' placeholder='Email' required/>
                  <input type="password" placeholder='Password' className='password loginInput' required/>
                  <NavLink to="/resetPassword">
                        <span className="resetPassword">
                              *forgot password ?
                        </span>
                  </NavLink>
                  <button className='loginButton' title='Login'>Login</button>
            </form> 
    </div>
  )
}