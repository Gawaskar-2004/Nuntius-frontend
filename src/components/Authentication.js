// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../services/api';
// import '../styles/styles.css';

// const Authentication = ({ isLogin }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevents page reload

//     try {
//       let data = { email, password };
//       let endpoint = '/api/v1/authentication/login'; // Default to login

//       if (!isLogin) {
//         // Register: Send user details
//         data = { name, email, phone_no: phoneNo, password };
//         endpoint = '/api/v1/auth/register';
//       }

//       console.log("Sending data to backend:", data);

//       const response = await api.post(endpoint, data);

//       if (response.status === 201 || response.status === 200) {
//         console.log("Success:", response.data);

//         if (isLogin) {
//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('userId', response.data.user_id); // Store user ID
//           navigate('/'); // Redirect to home
//         } else {
//           navigate('/login'); // Redirect to login after successful registration
//         }
//       }
//     } catch (err) {
//       console.error("Error:", err.response ? err.response.data : err.message);
//       setError(`Failed to ${isLogin ? "login" : "register"}. Please try again.`);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="text" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
//           </>
//         )}
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//       </form>
//     </div>
//   );
// };

// export default Authentication;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../services/api';
// import '../styles/styles.css';

// const Authentication = ({ isLogin }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevents page reload

//     try {
//       let data = { email, password };
//       let endpoint = '/api/v1/authentication/login'; // Match backend API

//       if (!isLogin) {
//         // Register: Send user details
//         data = { name, email, phoneNo, password }; // Corrected phoneNo field
//         endpoint = '/api/v1/authentication/register'; // Corrected endpoint
//       }

//       console.log("Sending data to backend:", data);

//       const response = await api.post(endpoint, data);

//       if (response.status === 201 || response.status === 200) {
//         console.log("Success:", response.data);

//         if (isLogin) {
//           localStorage.setItem('token', response.data.token);
//           localStorage.setItem('userId', response.data.user_id); // Store user ID
//           navigate('/'); // Redirect to home
//         } else {
//           navigate('/login'); // Redirect to login after successful registration
//         }
//       }
//     } catch (err) {
//       console.error("Error:", err.response ? err.response.data : err.message);
//       setError(`Failed to ${isLogin ? "login" : "register"}. Please try again.`);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <>
//             <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="text" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
//           </>
//         )}
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//       </form>
//     </div>
//   );
// };

// export default Authentication;
