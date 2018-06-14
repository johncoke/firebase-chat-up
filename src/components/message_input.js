import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateInput, sendMessageToDatabase, clearInput} from '../actions';

class MessageInput extends Component{

    sendMessage(event){
        
        event.preventDefault();

        const {message, roomId, clearInput} = this.props;


        sendMessageToDatabase(roomId, message);

        clearInput('message');
    }

    updateMessage(event){
        const {name, value} = event.target;

        this.props.updateInput(name, value);
    }

    render(){
        const {message} = this.props;
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.sendMessage.bind(this)}>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <input onChange={this.updateMessage.bind(this)} value ={message}type="text" name="message" placeholder="Enter Message"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        message: state.input.message
    }
}

export default connect(mapStateToProps, {updateInput, clearInput})(MessageInput);