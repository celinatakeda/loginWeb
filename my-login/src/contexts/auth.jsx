import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if(recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    console.log("login", response.data);

    // api criar uma session

    const loggedUser = response.data.user;
    const token = response.data.token;

    /*const loggedUser = {
      id: "123", 
      email,
    };
    */

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/");
  };

    /*
    if (password === "secret") {
      //setUser({ id: "123", email })
      setUser(loggedUser);
      navigate("/");
    }
  };
  */
  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

   // user != null 
  // authenticated = true
   // user == null 
  // authenticated = false
  //!!user: tranforma num cast de boolean

  return (
    <AuthContext.Provider
      value={{ authenticated:!!user, user, loading, login, logout  }}>
        {children}
    </AuthContext.Provider>
  );
};