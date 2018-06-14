import types from './types';
import {db, auth} from '../firebase';

export function createAccount(userData){
    return async dispatch => {
        try{
            const newUser = auth.createUserWithEmailAndPassword(userData.email,userData.password);
            console.log("New User: ", newUser);
        }
        catch(err){
            console.log("create account error: ", err.message)
        }
    }
}

export function updateChat(chatLog) {
    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog
    }
}
export function updateInput(name, value) {
    return {
        type: types.UPDATE_INPUT,
        payload: { name, value }
    }
}

export function sendMessageToDatabase(id, message) {
    db.ref(`/chat-logs/${id}`).push({
        name: 'Rocko',
        message
    });

}

export function clearInput(name) {
    return {
        type: types.CLEAR_INPUT,
        payload: name
    }
}

export function updateRooms(rooms){
    return{
        type:types.UPDATE_ROOMS,
        payload: rooms
    }
}

export function setRoom(name){
    return{
        type:types.SET_ROOM,
        payload: name
    }
}

export async function createRoom(name) {
    const firstMessage = {
        0: {
            message: `Welcome to room: ${name}`,
            name: 'Admin'
        }
    }

    const newChat = await db.ref('/chat-logs').push(firstMessage);

    const newRoom = {
        name,
        chatId: newChat.key
    }
    const response = await db.ref('/chat-rooms').push(newRoom);
    return newChat.key;
}

export function clearChatData(){
    return{
        type: types.CLEAR_CHAT_DATA
    }
}