import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';

import './App.css';

export default function App() {

  const[count,setCount]= useState(0);
 

  function handleAdd(){
    setCount(count=>count+1);
    setCount(count=>count+1);
  }
  function handleSub(){
    setCount(count-1);
  }

  return  (
    <div className='App'>
      <Header/>
      <div className='box'>
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>ADD</button>
        <button onClick={handleSub} className='sub'>SUB</button>
      </div>
      <h1>Hello World!</h1>
      <TaskList />
      <Footer/>
    </div>
  )
}
