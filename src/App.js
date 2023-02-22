import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  }
  const addItems = () => {
    setNewItem((oldVal) => {
      return [...oldVal, item]
    });
    setItem('');
  }

  return (
    <React.Fragment>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>TODo List</h1>
          <br />
          <input type='text' placeholder='Add an Item' onChange={itemEvent} value={item}/>
          <Button className='newBtn' onClick={addItems}><AddIcon />
          </Button>
          <br />

          <ol>
            {newItem.map((val, id) => {
              return  (
                <ToDoList 
                  key = {id}
                  text={val}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;