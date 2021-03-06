import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Chat from './chat';
import CreateChatroom from './create_chatroom';
import ChatRooms from './chat_rooms';
import SignUp from './sign_up';


const App = () => (
    <div>
        <Nav/>
        <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/chat/:id" component={Chat}/>
        <Route path="/chat-rooms" component={ChatRooms}/>
        <Route path="/create-room" component={CreateChatroom}/>
        </div>
    </div>
);

export default App;
