import React, {useEffect, useState, useRef} from "react";
import {Alert} from 'react-bootstrap';
import base, {database} from "../../../base";
import ChatHistory from "./ChatHistory";
import {sendTelegramMessage, sendInstagramMessage} from '../../../server';


const  ChatComponent = ({selectedChat, selectedUser, platform, chats, users}) => {
    
    //const history = useRef({});
    const [history, setHistory] = useState({});
    const text = useRef("")

    let textRef;

    const sendMessage = (e) => {
        e.preventDefault();
        if(!textRef.value) return;
        database.ref(`${platform}/users/${selectedUser}/chats/${selectedChat}/history`).push({
            own:true,
            text: textRef.value,
            date: Date.now() 
        });
        if(platform === 'telegram'){
            sendTelegramMessage({
                username: selectedUser,
                chat_id: selectedChat,
                text:textRef.value });
        }
        else if(platform === 'instagram'){
            sendInstagramMessage({
                username: selectedUser,
                chat_id: selectedChat,
                text:textRef.value });
        }
        
        textRef.value = '';
    }

    useEffect(() => {
        console.log(`${platform}/users/${selectedUser}/chats/${selectedChat}/history`);
        let a = database.ref(`${platform}/users/${selectedUser}/chats/${selectedChat}/history`);
        a.on('value', value => {
            setHistory(value.val() || {});
            //Обновление прочитаного статуса
            // database
            //     .ref(`${platform}/users/${selectedUser}/chats/${selectedChat}`)
            //     .update({unread_messages: false});
            //console.log(history.current);
        });
        return () => {
            a.off();
        }
    },[]);

    useEffect(() => {
        let element = document.querySelector('.history-ul');
        let element2 = document.querySelector('.chat-history');
        // console.log(element);
        // console.log(element2.scrollTop);
        // console.log(element.scrollHeight);
        element2.scrollTop = element.scrollHeight;
        // console.log(element2.scrollTop);

        //.scrollTop = document.querySelector('.history-ul').scrollHeight
      }, [history])

    const keyDownHandler = (e) => {
        if(e.keyCode === 13){
            sendMessage(e);
        }
    }

    const createNewDeal = (e) => {
        e.preventDefault();
        
    }
    return(
        <div className="chat-component container">
            <ChatHistory 
                history={history} 
                owner={selectedUser} 
                sender={chats[selectedChat].username || chats[selectedChat].name || 'Собеседник'}/>
            <div className="chat-input row container" onKeyDown={keyDownHandler}>
                <div className="col-8 input-area"> 
                    <textarea ref={ref => textRef = ref} ></textarea>
                </div>
                <div className="submit-btn container-fluid col-4">
                    <div>
                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={sendMessage}>Отправить</button>
                        <button type="button" className="btn btn-outline-info btn-sm" onClick={createNewDeal}>Создать сделку</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

//<button onClick={() => this.props.setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default ChatComponent;