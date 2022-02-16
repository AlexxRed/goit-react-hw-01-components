import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// repeat lesson

// const elementParagraph = React.createElement('p',{
//   children:'element in react'
// })

// const elementTitle = React.createElement('h1', {
//   children: 'Start react'
// })

// const element = React.createElement('div', {
//   a: 10,
//   b: 20,
//   children: ['Hello react', elementParagraph, elementTitle]

// }, )
// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'))
const elemTitle = <h1>Start</h1>;
const elemSpan = <span>React</span>;

const JSXelement = (
  <div>
    hello react
    {elemTitle}
    {elemSpan}
  </div>
);
ReactDOM.render(JSXelement, document.querySelector('#root'));
