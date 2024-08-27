import React from 'react'
import './passwordReset.css'
import AdminHeader from '../Admin/adminHeader/adminHeader'
export default function PasswordReset() {
  return (
    <div className='PasswordReset'>
            <div className="passwordHeader">
                  <AdminHeader/>
            </div>
            <form className='inputDiv'>
                  <span className='title'>Password Reset</span>
                  <input type="email" className='EmailInput loginInput' placeholder='Email' required/>
                  <input type="password" className="passwordInput" placeholder='Current Password' required/>
                  <input type="password" className="passwordInput" placeholder='New Password' required/>
                  <button className='passwordResetConfimButton' title='confirm'>Confirm</button>
            </form>
    </div>
  )
}