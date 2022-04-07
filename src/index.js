import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DataPost = [{message:"Привет", id:"1", likes: 3},
        {message:"Я тут", id:"2", likes: 10},
        {message:"Я новый пользователь", id:"3", likes: 8}]

let names = [{name:"Кирилл", id:"2",text:"Как дела?"},
       {name:"Стив", id:"3", text:"Пошли погуляем"},
       {name:"Илон", id:"1", text:"Привет"}       
                              ]

ReactDOM.render(
  <React.StrictMode>
    <App DataPost={DataPost} names={names} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


