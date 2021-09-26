import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Pagination from '../pagination/pagination';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FormGroup, InputGroup } from '@blueprintjs/core';
import Settings from '../settings/settings';
import { v4 as uuid } from 'uuid';
import '../../app.css';


const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [incompleted, setIncompleted] = useState(Boolean);
  const [color, setColor] = useState('dark');
  console.log(' in compleated ---- > ', incomplete);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item._id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function Incompleted() {
    console.log('incompleted ====== ', incompleted);
    setIncompleted(incompleted ? false : true)
    setColor(incompleted ? 'dark' : 'warning')

  }
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }
  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      console.log('lisssst===>', list2);
      setList(list2);
    }
  };

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list]);

  return (
    <>


      <div className='form-container'>

        <Router>
          <Switch>
            <Route exact path="/">
              <Container>
              <Card style={{ width: '55rem' }}>
                <Card.Body>
                  <Card.Title>Add Item</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>To Do List Manager <h3 style={{ color: 'red' }}>{incomplete.length}</h3></Form.Label>
                      <Form.Control
                        type="text"
                        name="text"
                        placeholder="Add To Do List Item"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Assigned To</Form.Label>
                      <Form.Control
                        type="text"
                        name="assignee"
                        placeholder="Assigned To"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <FormGroup helperText='' label='Difficulty' labelFor='text-input' labelInfo='' >
                      <input onChange={handleChange} defaultValue={3} type='range' min={1} max={5} name='difficulty' required />
                    </FormGroup>
                    <Button type="submit">Add Item</Button>
                  </Form>

                </Card.Body>
                <Button variant={color} onClick={Incompleted}> {incompleted ? ' Tasks not completed' : 'All tasks '} </Button>
              </Card>
            </Container>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </div >
       <Pagination className='pagList-container' list={list} incompleted={incompleted} incomplete={incomplete} toggleComplete={toggleComplete}></Pagination>
    </>
  );
};

export default ToDo;