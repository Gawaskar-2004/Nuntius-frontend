// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080/api/v1', // Adjust backend URL if necessary
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${localStorage.getItem('token')}`, // Auto attach token
//   },
// });

// export default api;
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api/v1'; // Ensure this matches your backend URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Automatically attach auth token (if using JWT authentication)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
