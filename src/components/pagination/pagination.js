import { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../../context/settings';
import List from '../list/list';
import { Button } from '@blueprintjs/core';

export default function Pagination(props) {
  let btnArr = [];
  const settings = useContext(SettingsContext);
  const [chosenList, setChosenList] = useState(settings.showCompleted ? props.list : props.incomplete);
  const [activeList, setActiveList] = useState(chosenList.slice(0, settings.itemsPerPage));
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(chosenList.length / settings.itemsPerPage));
  const [activePage, setActivePage] = useState(1);
  const [buttonsArray, setButtonsArray] = useState(btnArr);

  useEffect(() => {
    setChosenList(settings.showCompleted ? props.list : props.incomplete);
    setActiveList(chosenList);
    setNumberOfPages(Math.ceil(chosenList.length / settings.itemsPerPage));
  }, [props.list, props.incomplete, chosenList, settings.itemsPerPage]);

  useEffect(() => {
    if (numberOfPages) {

      btnArr.push('Prev');

      for (let i = 1; i <= numberOfPages; i++) {
        btnArr.push(i);
      }

      btnArr.push('Next');

      setButtonsArray(btnArr);
    }
  }, [numberOfPages]);

  useEffect(() => {
    let start = (activePage - 1) * settings.itemsPerPage;
    let end = start + settings.itemsPerPage;

    setActiveList(chosenList.slice(start, end));
  }, [activePage, settings.itemsPerPage, chosenList]);

  useEffect(() => {
    if (activeList.length == 0 && chosenList.length != 0) {
      setActivePage(activePage - 1);
    }
  }, [activeList]);


  function handlePages(pageNumber) {

    if (pageNumber == 'Prev' && buttonsArray.includes(activePage - 1)) {
      setActivePage(activePage - 1);
    } else if (pageNumber == 'Next' && buttonsArray.includes(activePage + 1)) {
      setActivePage(activePage + 1);
    } else if (typeof pageNumber == 'number') {
      setActivePage(pageNumber);
    }
  }
  
  return (
      
    <>
      <br />
      <List incompleted={props.incompleted}  list={props.list} color={props.color} incomplete={props.incomplete} toDoStatus={props.toDoStatus} toggleComplete={props.toggleComplete} />
      <br />

      {buttonsArray &&
        buttonsArray.map((item) => (
          <>
            <Button onClick={() => handlePages(item)} className='pagination-buttons'>
              {item}
            </Button>
          </>
        ))}
    </>
  );
}