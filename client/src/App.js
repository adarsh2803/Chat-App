//React is used for FrontEnd part
import React from 'react';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router ,Route } from 'react-router-dom';

//Anyone come to website will land on Join component ,Here he will pass data
//through QueryString data pass
//Once we passed data , we are going to render chat component
const App = () =>(
  <Router>
    <Route path="/" exact component = {Join} />
    <Route path="/chat" component = {Chat} />
  </Router>
);

export default App;
