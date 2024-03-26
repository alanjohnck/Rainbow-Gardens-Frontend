import React from 'react'
import "./adminlogin.css"
import AdminBG from "./Admin Login BG.png"
import Logo from "./Logo.svg"

function adminlogin() {
  return (
<div className="admin-login-main">
    <div className="admin-login-div-1">
    <div className="admin-login-div-1-top">
    <img src={AdminBG} alt='AdminBg'/>
    </div>
    <div className="admin-login-div-1-bottom">
        <div className="login-box">
            <div className="login-box-part1">
            <img src={Logo} alt='ALogo'/>
            </div>
            <div className="login-box-part2">
            <span>Enter Email Address</span>
            <input type='email' />
            <br />
            <span>Enter Password</span>
            <input type='password' />
            <br />
            <button>Login</button>
            <button className='forgot'>Forgot Password?</button>

            </div>

        </div>
    </div>
    </div>
</div>
  )
}

export default adminlogin