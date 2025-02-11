// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Auth from './components/Authentication';
// import Contacts from './components/Contacts';
// import Chat from './components/Chat';
// import UserProfile from './components/UserProfile';

// import './styles/styles.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Chat />} />
//         <Route path="/login" element={<Auth isLogin={true} />} />
//         <Route path="/register" element={<Auth isLogin={false} />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/profile" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Chat from './components/Chat';
// import UserProfile from './components/UserProfile';
// import Dashboard from "./components/Dashboard";
// import PrivateRoute from './components/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<PrivateRoute component={UserProfile} />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<PrivateRoute component={Chat} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Chat from "./components/Chat";
// import UserProfile from "./components/UserProfile";
// import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//           <Route path="/" element={<PrivateRoute><Chat /></PrivateRoute>} />

//           {/* Redirect unknown routes to Dashboard */}
//           <Route path="*" element={<Navigate to="/dashboard" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

 

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Chat from "./components/Chat";
// import UserProfile from "./components/UserProfile";

// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes (Accessible without authentication) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      
//           <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />

  
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Chat from "./components/Chat";
// import UserProfile from "./components/UserProfile";
// import Contacts from "./components/Contacts";  // Added Contacts Page
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes (Accessible without authentication) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
//           <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
//           <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />

//           {/* Redirect unknown paths to login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
// import Layout from "./components/Layout"; // WhatsApp-style Layout
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes (Accessible without authentication) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          
//           {/* After Profile, go to Layout (which contains Chats, Contacts, Profile) */}
//           <Route path="/app/*" element={<PrivateRoute><Layout /></PrivateRoute>} />

//           {/* Redirect unknown paths to login */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
// import Layout from "./components/Layout"; // WhatsApp-style Layout
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes (Accessible without authentication) */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={
//             <PrivateRoute>
//               <UserProfile />
//             </PrivateRoute>
//           } />

//           {/* After Profile, go to Layout (Chats, Contacts, Settings) */}
//           <Route path="/app/*" element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           } />

//           {/* Default Redirects */}
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
// import Dashboard from "./components/Dashboard";  // WhatsApp-style layout with Chats, Contacts, Settings
// import PrivateRoute from "./components/PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Public Routes (Accessible without authentication) */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />

//           {/* Private Routes (Require Authentication) */}
//           <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

//           {/* Default Route: Redirect to Login if not authenticated */}
//           <Route path="/" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import UserProfile from './components/UserProfile';
// import Contacts from './components/Contacts';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<UserProfile />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import UserProfile from './components/UserProfile';
// import Contacts from './components/Contacts';
// import Chat from './components/Chat';
// import Layout from './components/Layout'; // Import Layout

// import Settings from './components/Settings';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<UserProfile />} />

//         {/* Layout with Tabs (Chats, Contacts, Settings) */}
//         <Route path="/layout" element={<Layout />}>
          
//           <Route path="contacts" element={<Contacts />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         <Route path="/chat/:contactId" element={<Chat />} /> {/* Chat Route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
// import Dashboard from "./components/Dashboard";

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/profile" element={<UserProfile />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import UserProfile from "./components/UserProfile";
// import Dashboard from "./components/Dashboard";
// import { ContactProvider } from "./components/ContactProvider";

// function App() {
//     return (
//         <Router>
//             <ContactProvider>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/login" />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/profile" element={<UserProfile />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                 </Routes>
//             </ContactProvider>
//         </Router>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import ContactManagement from './components/ContactManagement';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check for stored user data on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Protected Route wrapper component
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      {/* Add a navigation bar if desired */}
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public routes */}
          <Route 
            path="/login" 
            element={
              <Login onLoginSuccess={handleLogin} />
            } 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />

          {/* Protected routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile 
                  user={currentUser} 
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <ContactManagement 
                  currentUserId={currentUser?.id} 
                />
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route
            path="/"
            element={
              currentUser ? (
                <Navigate to="/contacts" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



