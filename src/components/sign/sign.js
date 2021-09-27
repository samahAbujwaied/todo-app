import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../context/auth";
import { Form, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './sign.css'

function Sign(props) {
  const [data, setData] = useState({});
  const { signup, IsloggedIn } = useContext(LoginContext);
  const reload = () => window.location.reload();
  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));

  }
  console.log('data.role-----------', data);
  console.log('IsloggedIn-[[[', signup);
  function handleSubmit(e) {
    e.preventDefault();
    signup(data.username, data.password, data.role);
    setData((data) => ({ ...data, [e.target.name]: "" }));
    // history.push('/todo')

  }
  function refresh() {
    alert('You are successfully registar!');
    reload();
  }

  return (

    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="username"
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="password"
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Role</Form.Label>
          <Form.Select onClick={handleChange} name="role" id="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>

        </Form.Group>
        <br />
        <Button block style={{marginLeft:"260px"}} size="lg" type="submit"  >
          Login
        </Button>
        {IsloggedIn ? refresh() : ''}
      </Form>
    </div>
  );
}

export default Sign;
