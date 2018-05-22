import React, {Component} from 'react';
import db from '../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../actions'
import { link } from 'react-router-dom';

class Chat extends Component{

    componentDidMount(){
        db.ref('/chat-log').on('value', (snapshot)=>{
            this.props.updateChat(snapshot.val());
        });
    }

    render(){
        console.log('chat log: ', this.props.chatLog);
        const {chatLog} = this.props;
        const chatElements = Object.keys(chatLog).map((key, index) => {
            const {name, message} = chatLog[key];
            return <li className="collection-item" key={key}><b>{name}: </b>{message}</li>
        });
        return(
            <div>
                <h1 className="center">Chatterbate Chat Room</h1>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        chatLog: state.chat.log
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);