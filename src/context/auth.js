import React, { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";
import superagent from "superagent";
import base64 from "base-64";
import jwt from "jsonwebtoken";

const API = "https://ibrahem-todo-server.herokuapp.com";
export const LoginContext = React.createContext();

export default function Auth(props) {
  const [IsloggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = cookie.load("token");
    validateToken(token);
  }, []);

  const validateToken = (token) => {
    if (token !== undefined && token !== "null" && token !== "") {
      const user = jwt.decode(token);
      setLogin(true, token, user);
    } else {
      setLogin(false, null, {});
    }
  };
  const setLogin = async (isLogged, token, user) => {
    try {
      cookie.save("token", token);
      setUser(user);
      setLoggedIn(isLogged);
    } catch (error) {
      throw Error;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          "authorization",
          `Basic ${base64.encode(`${username}:${password}`)}`
        );
      validateToken(response.body.token);
    } catch (error) {
      throw Error;
    }
  };

  const logout = () => {
    setLogin(false, null, {});
  };

  const signup = async (username, password, role) => {
    try {
      let body = {
        username: username,
        password: password,
        role: role,
      };
      const response = await axios.post(`${API}/signup`, body);
      validateToken(response.data.token);
    } catch (error) {
      throw Error;
    }
  };

  const state = {
    logout,
    login,
    signup,
    IsloggedIn,
    setLoggedIn,
    user,
    setUser,
  };

  return (
    <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>
  );
}
