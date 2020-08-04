import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//index.html in public folder , id=root in body
//what ever we are going to write ,is going inside App
//will copy paste it into root
ReactDOM.render(<App /> , document.querySelector('#root'));
