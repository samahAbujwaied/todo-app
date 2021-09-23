import React, { useEffect, useState, useContext } from "react";
import { Elevation } from '@blueprintjs/core';
import { Card, Button } from 'react-bootstrap'
import superagent from "superagent";
import "./list.css";
import cookie from "react-cookies";

function List(props) {
  const [finalArray, setFinalArray] = useState([]);
  const [check, setCheck] = useState([Boolean])
  const [idx, setIdx] = useState([]);
  const toggleComplete = (complete, indx) => {
    setCheck(complete)

  }

  useEffect(async () => {
    const token = cookie.load("token");
    let response = await superagent
      .get("https://ibrahem-todo-server.herokuapp.com/todo")
      .set("authorization", `Bearer ${token}`);
    setFinalArray(response.body.todo);
  }, [finalArray]);

  async function handledelete(index) {
    const token = cookie.load("token");
    let response = await superagent
      .delete(`https://ibrahem-todo-server.herokuapp.com/todo?index=${index}`)
      .set("authorization", `Bearer ${token}`);
    setFinalArray(response.body.todo);
  }

  const setVariation = (complete, idx) => {
    return complete ? 'success' : 'danger';
  };
  ;
  return (
    <div className="cardsContainer">
      {finalArray.map((item, idx) => (
        <>
          <Card  >
            {/* <div style={{ width: "100px" }} interactive={true} elevation={Elevation.TWO} key={item.id} className='card' style={{ width: '70rem', height: '230px' }}  > */}
              <small> Todo Item: {item.item}</small>
              <p>
                <hr />
                <p>Assigned to: {item.assign}</p>
              </p>
              <p>
                <small>Difficulty:{item.difficulty ? item.difficulty : 3}</small>
              </p>
              <Button style={{ width: "200px" }} variant={setVariation(check, idx)} type='submit'
                onClick={() => toggleComplete(check ? false : true, idx)}
                className="coplemte-btn">

                {check ? 'completed' : 'pending'} </Button>
              <Button
                style={{ width: "200px" }}
                className="delete-btn"
                variant="danger"
                onClick={() => handledelete(idx)}
              >
                Delete
              </Button>

            {/* </div> */}
          </Card>
        </>
      ))}
    </div>
  );
}

export default List;
