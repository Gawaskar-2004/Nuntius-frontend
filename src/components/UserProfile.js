// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import '../styles/styles.css';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userId = localStorage.getItem('user_id');
//         const response = await api.get(`/user/${user_id}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {user ? (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone Number:</strong> {user.phone_no}</p>
//           <p><strong>Account Created:</strong> {new Date(user.created_at).toLocaleString()}</p>
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useEffect, useState } from 'react';
// import api from '../services/api';  // Ensure this API service is correctly configured
// import '../styles/styles.css';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userId = localStorage.getItem('userId');  // ✅ Retrieve from localStorage
//         if (!userId) {
//           console.error("User ID not found in localStorage");
//           return;
//         }
        
//         const response = await api.get(`/user/${userId}`);  // ✅ Use correct variable
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {user ? (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone Number:</strong> {user.phone_no}</p>
//           <p><strong>Account Created:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</p>
//         </div>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import '../styles/styles.css';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//           setError("User ID not found in localStorage");
//           setLoading(false);
//           return;
//         }

//         const response = await api.get(`/user/${userId}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Failed to fetch user data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return <p>Loading user details...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {user ? (
//         <div>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone Number:</strong> {user.phone_no}</p>
//           <p><strong>Account Created:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</p>
//         </div>
//       ) : (
//         <p>No user data available.</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Redirect if user not found
// import api from '../services/api';
// import '../styles/styles.css';
// import defaultAvatar from '../assets/default-avatar.png'; // Ensure this image exists

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userId = localStorage.getItem('userId');
//         console.log("Retrieved User ID:", userId); // ✅ Debugging log

//         if (!userId) {
//           setError("User ID not found in localStorage.");
//           setLoading(false);
//           navigate('/login'); // Redirect to login if userId is missing
//           return;
//         }

//         const response = await api.get(`/user/${userId}`);
//         console.log("User Data Response:", response.data); // ✅ Debugging log

//         if (response.data) {
//           setUser(response.data);
//         } else {
//           setError("User data not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Failed to fetch user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [navigate]); // Ensure navigation is available

//   if (loading) {
//     return <p>Loading user details...</p>;
//   }

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         {/* Profile Picture */}
//         <div className="profile-image-container">
//           <img 
//             src={user.profile_picture || defaultAvatar} 
//             alt="Profile" 
//             className="profile-picture" 
//           />
//         </div>
        
//         {/* User Info */}
//         <div className="profile-details">
//           <h2>{user.name}</h2>
//           <p className="profile-email">{user.email}</p>
//           <p className="profile-phone">{user.phone_no}</p>
//           <p className="profile-date">
//             <strong>Joined:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import defaultAvatar from '../assets/default-avatar.png'; // ✅ Default profile picture
// import '../styles/styles.css';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [profilePicture, setProfilePicture] = useState(defaultAvatar); // Store profile picture
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const storedUser = localStorage.getItem('user');
//         const storedProfilePicture = localStorage.getItem('profilePicture');

//         if (!storedUser) {
//           setError("User not found.");
//           navigate('/login'); // Redirect if user not found
//           return;
//         }

//         setUser(JSON.parse(storedUser));

//         // If a profile picture is saved in localStorage, use it
//         if (storedProfilePicture) {
//           setProfilePicture(storedProfilePicture);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setError("Failed to load user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [navigate]);

//   // ✅ Handle Image Upload & Store in LocalStorage
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.readAsDataURL(file); // Convert image to Base64
//     reader.onload = () => {
//       const base64String = reader.result;
//       setProfilePicture(base64String);
//       localStorage.setItem('profilePicture', base64String); // Save in LocalStorage
//     };
//   };

//   if (loading) return <p>Loading user details...</p>;
//   if (error) return <p className="error-message">{error}</p>;

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {user && (
//         <div>
//           {/* ✅ Display profile picture */}
//           <img 
//             src={profilePicture} 
//             alt="Profile" 
//             className="profile-image" 
//           />

//           {/* ✅ Upload Profile Picture */}
//           <input type="file" accept="image/*" onChange={handleImageUpload} />

//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone Number:</strong> {user.phone_no}</p>
//           <p><strong>Account Created:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png'; // Default avatar
import '../styles/styles.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedProfilePicture = localStorage.getItem('profilePicture');

        if (!storedUser) {
          setError("User not found.");
          navigate('/login');
          return;
        }

        setUser(JSON.parse(storedUser));

        if (storedProfilePicture) {
          setProfilePicture(storedProfilePicture);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // ✅ Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setProfilePicture(base64String);
      localStorage.setItem('profilePicture', base64String);
    };
  };

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      {/* ✅ Profile Image */}
      <img src={profilePicture} alt="Profile" className="profile-image" />

      {/* ✅ Upload Button */}
      <label htmlFor="upload-photo" className="upload-btn">Change Picture</label>
      <input type="file" id="upload-photo" accept="image/*" onChange={handleImageUpload} />

      {/* ✅ User Details */}
      {user && (
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNo}</p>
          <p><strong>Account Created:</strong> {user.created_at ? new Date(user.created_at).toLocaleString() : "N/A"}</p>
          <button className="dashboard-btn" onClick={() => navigate('/contacts')}>
  Go to Contacts 
</button>


        </div>
      )}
    </div>
  );
};

export default UserProfile;
