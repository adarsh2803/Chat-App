//We are going to use Hooks . live cycle methods which is inside Hooks , this is client side
//This is our front end & we are going to add emiiters &listners for client side
import React ,{ useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.css';
let socket;

//With hooks u can use as many useState as many u want
const Chat = ({location}) => {
  //2nd parameter is a setter Function , to set values
  const [name , setName]= useState('');
  const [room , setRoom]= useState('');
  const [users, setUsers] = useState('');
  const [message , setMessage] = useState('');
  const [messages , setMessages] = useState([]);
  const ENDPOINT = 'https://chat-app-backend-m7lf.onrender.com';

  //Gives multiple output results , so for only 1 output , return o/p
  // only when there are any changes
  useEffect(()=>{
    const {name,room}=queryString.parse(location.search);
    socket= io(ENDPOINT);
    setName(name);
    setRoom(room);

    //We have emmiter for Join , We will also make for message and sendMessage
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

  } ,[ENDPOINT,location.search]);

useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

    //Function for sending Messages
  //We are writing every Function for index.js
  //What ever data index.js(server) is sending ,
  //we should have a corresponding function for some Response
  const sendMessage = (event) =>{
      //If some Button is clicked , Page is refreshed , we should Prevent that
      event.preventDefault();

      //If message is send , Input is set to empty
      if(message){
        socket.emit('sendMessage' , message ,()=> setMessage(''));
      }
  }

  return(
    <div className="outerContainer">
       <div className="container">
         <InfoBar room={room} />
         <Messages messages={messages} name={name}/>
         <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
       </div>
       <TextContainer users={users}/>
    </div>

  ) ;

}

export default Chat;
