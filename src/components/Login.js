// // // src/components/Login.js
// // import React, { useState } from 'react';
// // import api from '../services/api';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [credentials, setCredentials] = useState({
// //     email: '',
// //     password: '', // Assume a password field; if not available, modify as needed.
// //   });
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     api.post('/authentication', credentials)
// //       .then((response) => {
// //         // Assume response contains a token and user details.
// //         const token = response.data.token;
// //         localStorage.setItem('token', token);
// //         localStorage.setItem('user', JSON.stringify(response.data.user));
// //         navigate('/'); // redirect to chat page
// //       })
// //       .catch((error) => {
// //         console.error('Login error:', error);
// //         setError('Login failed. Please check your credentials.');
// //       });
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2>Login</h2>
// //       {error && <p style={{color: 'red'}}>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <label>Email:</label>
// //         <input type="email" name="email" value={credentials.email} onChange={handleChange} required />

// //         <label>Password:</label>
// //         <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// // src/components/Login.js
// import React, { useState } from 'react';
// import api from '../services/api';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     api.post('/authentication/login', credentials)
//       .then((response) => {
//         const token = response.data.token;
//         localStorage.setItem('token', token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         navigate('/'); // Redirect on successful login
//       })
//       .catch((error) => {
//         console.error('Login error:', error.response || error);
//         setError('Login failed. Please check your credentials.');
//       });
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
//         <label>Password:</label>
//         <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import api from '../services/api';  // Ensure API is correctly configured
// import { useNavigate,Link } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Handle input field changes
//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   // Handle login submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post('/authentication/login', credentials);
//       console.log("Login Response:", response.data); // ✅ Debugging log

//       const token = response.data.token;
//       const user = response.data.user; // ✅ Extract user object

//       if (user) {
//         // Find the correct user ID field (user_id, userId, id)
//         const userId = user.user_id || user.userId || user.id;

//         if (userId) {
//           localStorage.setItem('token', token);
//           localStorage.setItem('user', JSON.stringify(user));
//           localStorage.setItem('userId', userId);  // ✅ Store userId separately

//           console.log("User ID stored:", userId);
//           navigate('/profile'); // Redirect to home/profile page
//         } else {
//           console.error("User ID missing in response:", user);
//           setError("Login failed: Invalid user data received.");
//         }
//       } else {
//         setError("Login failed: No user data received.");
//       }
//     } catch (error) {
//       console.error("Login error:", error.response ? error.response.data : error);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input 
//           type="email" 
//           name="email" 
//           value={credentials.email} 
//           onChange={handleChange} 
//           required 
//         />
//         <label>Password:</label>
//         <input 
//           type="password" 
//           name="password" 
//           value={credentials.password} 
//           onChange={handleChange} 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


// new
import React, { useState } from 'react';
  
import api from "../api";  // Correct

import { useNavigate, Link } from 'react-router-dom';
import "../styles/styles.css"; // Add CSS styles for WhatsApp look

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/authentication/login', credentials);
      const token = response.data.token;
      const user = response.data.user;
      const userId = user?.user_id || user?.userId || user?.id;

      if (userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('userId', userId);
        navigate('/profile');
      } else {
        setError("Login failed: Invalid user data received.");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>

      {/* WhatsApp-style navigation link */}
      <p className="auth-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
