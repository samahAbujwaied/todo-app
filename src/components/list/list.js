
import React, { useEffect, useState, useContext } from "react";
import { Card, Elevation } from '@blueprintjs/core';
import '../../app.css';
import superagent from "superagent";
import cookie from "react-cookies";
import { Button, Row,Col } from "react-bootstrap"
export default function Settings(props) {

    const setVariation = (complete) => {
        return complete ? 'success' : 'danger';
    };
  
    const [finalArray, setFinalArray] = useState([]);
    const [check, setCheck] = useState([Boolean])
    const toggleComplete = (complete) => {
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
    return (
        <> 
            <div className="card" style={{ marginLeft:"15rem"}}  lg={4} >
                {finalArray.map((item, idx) => (
                   <>
                        <Card style={{display:"inline" , marginTop:"12px" ,width:"700px"}}  >
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
                        </Card>
                        <br/></>
                ))}
            </div>
           

        </>
    )
}






