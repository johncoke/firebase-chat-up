import types from './types';
import db from '../firebase';

export function updateChat(roomData){
    console.log('Room Data: ', roomData);
    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog: roomData['chat-log'],
        name: roomData.name
    }
}
export function updateInput(name, value){
    console.log("name and value: ", name, value);
    return{
        type: types.UPDATE_INPUT,
        payload: {name, value}
    }
}

export function sendMessageToDatabase(id, message){
    db.ref(`/chat-rooms/${id}/chat-log`).push({
        name: 'Rocko',
        message
    });

}

export function clearInput(name){
    return{
        type: types.CLEAR_INPUT,
        payload: name
    }
}


export async function createRoom(name){
    const newRoom = {
        name,
        'chat-log': {
            0:{
                message: `Welcome to room: ${name}`,
                name: 'Admin'
            }
        }
    }
    const response = await db.ref('/chat-rooms').push(newRoom);
    return response.key;
}
