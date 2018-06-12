import React, {Component} from 'react';
import db from '../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../actions'
import { link } from 'react-router-dom';
import MessageInput from './message_input';

class Chat extends Component{

    componentDidMount(){
        const {id} = this.props.match.params;
        db.ref(`/chat-rooms/${id}/`).on('value', (snapshot)=>{
            this.props.updateChat(snapshot.val());
        });
    }

    render(){
        console.log('chat log: ', this.props.chatLog);
        const {chatLog, roomName, match: {params} } = this.props;
        const chatElements = Object.keys(chatLog).map((key, index) => {
            const {name, message} = chatLog[key];
            return <li className="collection-item" key={key}><b>{name}: </b>{message}</li>
        });
        return(
            <div>
                <h1 className="center">{roomName || 'Chatterbait Chat Room'}</h1>
                <ul className="collection">
                    {chatElements}
                </ul>
                <MessageInput roomId={params.id}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        chatLog: state.chat.log,
        roomName: state.chat.name
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);