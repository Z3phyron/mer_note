import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "http://localhost:5000/api/auth/";
const NOTE_URL = "http://localhost:5000/api/notes/";

const AuthContext = createContext({
  currentUser: null,
  notes: null,
  Sign_In: () => Promise,
  Sign_Out: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
 

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutUser = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("USER");
  };

  // console.log(isLoggedIn);

  const user = JSON.parse(localStorage.getItem("USER"));
 

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
     

     
    } else if (user?.exp * 1000 < Date.now()) {
      localStorage.removeItem("AUTH_TOKEN");
      localStorage.removeItem("USER");
      setCurrentUser(null);
      setIsLoggedIn(false);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }

    
  },[]);

  console.log(currentUser);

  const Sign_In = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    console.log(response);

    if (response.data) {
      const token = response.data.token;
      if (token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(response.data.token));
        localStorage.setItem("USER", JSON.stringify(decodedToken));
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("AUTH_TOKEN");
          localStorage.removeItem("USER");
          setCurrentUser(null);
          setIsLoggedIn(false);
        }
      }
    }

    return response.data;
  };

  // NOTE_URL;

  // Create new post
  const CreatePost = async (postData) => {
     const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const response = await axios.post(NOTE_URL, postData, config);

    return response.data;
  };

  const delNote = async (id) => {
     const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    console.log(id)

    const response = await axios.delete(NOTE_URL + id, config);

    return response.data;
  };
  const editNote = async (id, noteData) => {
     const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

   

    const response = await axios.put(NOTE_URL + id, noteData, config);

    return response.data;
  };


  const Sign_Up = async (userData) => {
    const response = await axios.post(API_URL, userData);
    console.log(response);

    // if (response.data) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }

    return response.data;
  };

  const value = {
    currentUser,
    Sign_In,
    Sign_Up,
    isLoggedIn,
    logOutUser,
    CreatePost,
    delNote,
    editNote
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
