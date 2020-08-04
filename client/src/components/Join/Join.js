//Here we are going to use React Hooks
//We can convert Class based components to Function Based components
//Less Code and More cleaner

import React , {useState} from 'react';
import {Link} from 'react-router-dom';
//import css also
import './Join.css'

const Join = () => {
  const[name, setName]=useState('');
  const[room, setRoom]=useState('');
  //This is React not css/html , so class is==className
  //whn user type in something the event is going to occur
  //We are using Hooks , using Simple Variable Names as state Properties SetName, setRoom
  //For Link , we are going to use QueryString
  //We r going to pass data as a URL , Also we have a callBack Function
  //so that only mode of chatting is through logging ,copying chat link is Not allowed
  return(
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
       <h1 className="heading">Join</h1>
       <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=>
                    setName(event.target.value)} /></div>
       <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=>
                    setRoom(event.target.value)} /></div>
       <Link onClick={event =>(!name || !room) ? event.preventDefault():null } to={`/chat?name=${name}&room=${room}`}>
         <button className="button mt-20" type="submit">Sign In</button>
       </Link>
      </div>
    </div>
  )
}

export default Join;
