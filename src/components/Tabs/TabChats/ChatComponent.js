import React, {useEffect, useState, useRef} from "react";
import {Alert} from 'react-bootstrap';
import base, {database, database_delay} from "../../../base";
import ChatHistory from "./ChatHistory";

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
        _taasSendMessage(textRef.value);
        textRef.value = '';
    }

    const _taasSendMessage = async (text) =>{
        let apiKey = await database_delay.ref(`users/${selectedUser}/apiKey`).get().then(x => x.val());
        console.log(apiKey);
        let data = {
            "api_key": String(apiKey), //"89826635390:r1MYpLgJJFxEUn9bxV2B4Uhdq5FxAx6KzYyaKB6f"
            "@type": "sendMessage",
            "chat_id": Number(selectedChat), 
            "disable_notification": true,
            "input_message_content": {
                "@type": "inputMessageText",
                "disable_web_page_preview": true,
                "text": {
                "@type": "formattedText",
                "text": String(text)
                }
            }
        };
        fetch('https://api.t-a-a-s.ru/client',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(x=>console.log);
/*
        function sendMessage(chatId, {apiKey, text}, user, chatName, sender){
            if(text === '') return {status: 203, response: {"error":"Empty text"}};
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.t-a-a-s.ru/client', true);
            
            xhr.setRequestHeader('Content-Type', 'application/json');
            //xhr.setRequestHeader("Authorization", "506:wx23wCizMG9z2Q3A5xEg");
            xhr.send(JSON.stringify(data));
*/
    }

    useEffect(() => {
        console.log(`${platform}/users/${selectedUser}/chats/${selectedChat}/history`);
        let a = database.ref(`${platform}/users/${selectedUser}/chats/${selectedChat}/history`);
        a.on('value', value => {
            setHistory(value.val() || {});
            //console.log(history.current);
        });
        return () => {
            a.off();
        }
    },[])

    return(
        <div className="chat-component container">
            <ChatHistory history={history} owner={selectedUser} sender={chats[selectedChat].username}/>
            <div className="chat-input row container">
                <div className="col-8 input-area"> 
                    <textarea ref={ref => textRef = ref} ></textarea>
                </div>
                <div className="submit-btn container-fluid col-4">
                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

//<button onClick={() => this.props.setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default ChatComponent;