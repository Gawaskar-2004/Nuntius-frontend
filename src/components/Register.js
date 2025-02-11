// src/components/Register.js
// import React, { useState } from 'react';
// import api from '../services/api';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [user, setUser] = useState({
    
//     name: '',
//     email: '',
//     phone_no: '',
//     password: '',
//     // If you decide to add a password field, include it here
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     api.post('/user', user)
//       .then((response) => {
//         setMessage('Registration successful! Please log in.');
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.error('Registration error:', error);
//         setMessage('Registration failed. Please try again.');
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleRegister}>
        
        
//         <label>Name:</label>
//         <input type="text" name="name" value={user.name} onChange={handleChange} required />
        
//         <label>Email:</label>
//         <input type="email" name="email" value={user.email} onChange={handleChange} required />
        
//         <label>Phone No:</label>
//         <input type="text" name="phone_no" value={user.phone_no} onChange={handleChange} required />

//         {/* Optionally, add password fields if your backend supports them */}
//         <label>Password:</label>
//         <input type="password" name="password" value={user.password} onChange={handleChange} required /> 

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';
// import "../styles/styles.css"; 

// const Register = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone_no: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/user/register', user);
//       setMessage('Registration successful! Please log in.');
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//       setMessage('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Register</h2>
//       {message && <p>{message}</p>}
//       <form onSubmit={handleRegister}>
//         <label>Name:</label>
//         <input type="text" name="name" value={user.name} onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" value={user.email} onChange={handleChange} required />

//         <label>Phone No:</label>
//         <input type="text" name="phone_no" value={user.phone_no} onChange={handleChange} required />

//         <label>Password:</label>
//         <input type="password" name="password" value={user.password} onChange={handleChange} required />

//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

// new
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/styles.css";

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', phoneNo: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/user/register', user);
      setMessage('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
        <label>Phone No:</label>
        <input type="text" name="phoneNo" value={user.phoneNo} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>

      {/* WhatsApp-style navigation link */}
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
