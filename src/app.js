
import React, { useContext } from "react";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings';
import Header from './components/header/header';
import { If, Else, Then } from "react-if";
import Auth, { LoginContext } from "./context/auth";
import Sign from './components/sign/sign'
export default function App(){
    const { IsloggedIn } = useContext(LoginContext);
    return (
      <Auth>
        <If condition={IsloggedIn == true}>
          <Then>
            <SettingsProvider>
              <Header />
              <ToDo />
            </SettingsProvider>
          </Then>
          <Else>
            <Sign  />
          </Else>
        </If>
      </Auth>
    );
  
}


