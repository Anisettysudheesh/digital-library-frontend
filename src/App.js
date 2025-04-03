import React, { createContext, useState, useEffect ,useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


import Nptel from "./pages/nptel"
import UserLogin from "./forms/userLogin";

import UserDashboard from './pages/userdashboard';

import {jwtDecode} from "jwt-decode";
import Ebooks from './pages/ebooks';
import Ejournals from './pages/ejournals';
import Changepass from './pages/changepass';
import Quepapers from './pages/quepapers';

export const store = createContext();

function App() {
  const tokenState = useToken();
  return (
    <store.Provider value={tokenState}>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </store.Provider>
  );
}
function useToken() {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          return null;
        }
        return storedToken;
      } catch (error) {
        console.error("Invalid token during initialization:", error);
        localStorage.removeItem('token');
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return [token, setToken];
}

function MainContent() {
  const navigate = useNavigate();
  
  const [token, setToken] = useContext(store);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
  
        if (decodedToken.exp < currentTime) {
          // Token is expired
          setToken(null);
          localStorage.removeItem('token');
          navigate('/');
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setToken(null);
        localStorage.removeItem('token');
        navigate('/');
      }
    }
  }, [token, navigate]);


  return (
 
  <div className="app-grid">

  <div className="main-content">
    <Routes>
     
      <Route path="/" element={<UserLogin />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/Nptel" element={<Nptel />} />
      <Route path="/e-books" element={<Ebooks/>}/>
      <Route path="/e-journals" element={<Ejournals/>}/>
      <Route path="/Changepass" element={<Changepass/>}/>
      <Route path="/quepapers" element={<Quepapers/>}   />
    
    </Routes>
  </div>
</div>
  );
}

export default App; 

