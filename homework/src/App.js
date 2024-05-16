import './App.css';
import Message from './components/Message/Message';
import React, { useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState({
    text: '',
    author: ''
  })
  const myText = 'привет'
  return (
    <div className="App">
      <Message text = { myText }/>
      {messageList.map((message) => <div>{message}</div>)}
    </div>
  );
}

export default App;
