
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, GoogleProvider } from '../firebase-config';
import './authentication.css';

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigateToHome();
    } catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigateToHome();
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
      navigateToHome();
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigateToHome();
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={login}>Login</button>
      <button className="google-login-button" onClick={loginWithGoogle}>Login With Google</button>
      {!auth.currentUser && <button className="register-button" onClick={register}>Register</button>}
      {auth.currentUser && (
        <div>
          <button className="logout-button" onClick={logout}>Logout</button>
        
        </div>
      )}
    </div>
  );
};

export default Authentication;
