import React, { useState } from 'react';
import './adminLogin.css';
import AdminHeader from '../Admin/adminHeader/adminHeader';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        // Store token in localStorage (or another secure storage)
        localStorage.setItem('authToken', response.data.token);
        // Redirect to the admin dashboard
        navigate('/adminDashboard');
      }
    } catch (error) {
      alert('Invalid credentials'); // Display alert on login failure
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='adminLogin'>
      <div className="LoginPageheader">
        <AdminHeader />
      </div>
      <form className="inputDiv" onSubmit={handleLogin}>
        <span className="loginTitle">Login</span>
        <input
          type="email"
          className='EmailInput loginInput'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className='password loginInput'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NavLink to="/resetPassword">
          <span className="resetPassword">
            *forgot password ?
          </span>
        </NavLink>
        <button className='loginButton' title='Login' type="submit">Login</button>
      </form>
    </div>
  );
}
