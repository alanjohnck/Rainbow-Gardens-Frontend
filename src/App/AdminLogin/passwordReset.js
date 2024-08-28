import React, { useState,useEffect } from 'react';
import './passwordReset.css';
import AdminHeader from '../Admin/adminHeader/adminHeader';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your actual API base URL

const PasswordResetInitial = ({ onConfirm }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/send-verification-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send verification email');
      }
      
      onConfirm(email);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='inputDiv' onSubmit={handleSubmit}>
      <span className='title'>Password Reset</span>
      <input 
        type="email" 
        className='EmailInput loginInput' 
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        disabled={isLoading}
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className='passwordResetConfirmButton' disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Confirm'}
      </button>
    </form>
  );
};

const VerificationCodeForm = ({ onVerify, email }) => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/verify-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, resetCode: code, newPassword }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to verify code and reset password');
      }
      
      onVerify();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='inputDiv' onSubmit={handleSubmit}>
      <span className='title'>Verify Code</span>
      <input 
        type="text" 
        className='CodeInput loginInput' 
        placeholder='Verification Code' 
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required 
        disabled={isLoading}
      />
      <input 
        type="password" 
        className='PasswordInput loginInput' 
        placeholder='New Password' 
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required 
        disabled={isLoading}
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className='passwordResetConfirmButton' disabled={isLoading}>
        {isLoading ? 'Verifying...' : 'Verify and Reset'}
      </button>
    </form>
  );
};

const CountdownRedirect = ({ seconds }) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='inputDiv'>
      <span className='title'>Password Reset Complete</span>
      <p>Your password has been successfully reset.</p>
      <p>Redirecting to login page in {countdown} seconds...</p>
    </div>
  );
};

export default function PasswordReset() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState('');
  const [isResetComplete, setIsResetComplete] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = (submittedEmail) => {
    setEmail(submittedEmail);
    setIsVerifying(true);
  };

  const handleVerify = () => {
    setIsResetComplete(true);
    setTimeout(() => {
      navigate('/adminLogin');
    }, 5000);
  };

  if (isResetComplete) {
    return (
      <div className='PasswordReset'>
        <div className="passwordHeader">
          <AdminHeader />
        </div>
        <div className='inputDiv'>
          <span className='title'>Password Reset Complete</span>
          <p>Your password has been successfully reset.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='PasswordReset'>
      <div className="passwordHeader">
        <AdminHeader />
      </div>
      {!isVerifying && !isResetComplete && (
        <PasswordResetInitial onConfirm={handleConfirm} />
      )}
      {isVerifying && !isResetComplete && (
        <VerificationCodeForm onVerify={handleVerify} email={email} />
      )}
      {isResetComplete && <CountdownRedirect seconds={5} />}
    </div>
  );

}