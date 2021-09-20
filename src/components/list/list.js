import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import '../../app.css';
import { Button } from "react-bootstrap"
export default function Settings(props) {
    const setVariation = (complete) => {
        return complete ? 'success' : 'danger';
    };
    console.log('props.incomplete samah ',props.incomplete.length);
    return (
        <>
          {props.incompleted && props.activeList.length>0 ? props.activeList.map((item) => (
                <div className='cardsContainer'>
                    <Card interactive={true} elevation={Elevation.TWO} key={item.id} className='card' style={{ width: '80rem', height: '230px' }}  >
                        <small> {item.assignee}</small>
                        <p>
                            <hr />
                            <p>{item.text}</p>
                        </p>
                        <p>
                            <small>Difficulty: {item.difficulty}</small>
                        </p>
                        <Button variant={setVariation(item.complete)} type='submit' onClick={() => props.toggleComplete(item._id)}> {item.complete? 'completed' : 'pending'} </Button>
                    </Card>
                    <br />


                </div>
            )) :
            props.incomplete.length>0 ?
            props.incomplete.map((item) => (
                <div className='cardsContainer'>
                    <Card interactive={true} elevation={Elevation.TWO} key={item.id} className='card' style={{ width: '80rem', height: '230px' }}  >
                        <small> {item.assignee}</small>
                        <p>
                            <hr />
                            <p>{item.text}</p>
                        </p>
                        <p>
                            <small>Difficulty: {item.difficulty}</small>
                        </p>
                        <Button variant={setVariation(item.complete)} type='submit' onClick={() => props.toggleComplete(item._id)}> {item.complete? 'completed' : 'pending'} </Button>
                    </Card>
                    <br />


                </div>
            )) :
            <div className='cardsContainer'>
            <Card interactive={true} elevation={Elevation.TWO}  className='card' style={{ width: '80rem', height: '100px' }}  >
            <h2>No tasks </h2>
            </Card>
            <br />


        </div>
            
            }
            
        </>
    )
}