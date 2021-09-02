import React, {useEffect, useState} from "react";
import {Badge} from "react-bootstrap";
import {database} from "../../../base";

const SelectChat = ({selectChat,chatsRef, chats, setChats}) => {

    // const [chats, setChats] = useState({});
    useEffect(() => {
        console.log(chatsRef);
        let a = database.ref(chatsRef);
        a.on('value', value => {
            setChats(value.val() || {});
            //console.log(history.current);
        });
        return () => {
            a.off();
        }
    },[])
    if(!chats) return null;

    return(
        <ul className="list-group">
            {Object.keys(chats).map(chatId => {
                let chat = chats[chatId];
                let name = `Чат №${chatId}`;
                if(chat.name && chat.username) name = `${chat.name} (@${chat.username})`;
                else if(chat.name) name = chat.name;
                else if(chat.username) name = `@${chat.username}`;
                // let usernmaeStr = chat.name ? ` (@${chat.username})` : `@${chat.username}`;
                // if(chat.name || chat.username) name = `${chat.name || ''}${usernmaeStr}`;
                return (<li 
                    key={chatId}
                    className="list-group-item d-flex justify-content-between align-items-center" 
                    onClick={() => selectChat(chatId)}>
                        {name}
                        <Badge bg="warning" pill="true">{chat.unread_messages ? 'new' : ''}</Badge>
                    </li>)
            })}
        </ul>
    )
}

//<button onClick={() => setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default SelectChat;