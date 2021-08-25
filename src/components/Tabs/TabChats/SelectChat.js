import React from "react";
import {Badge} from "react-bootstrap";


const SelectChat = ({selectChat,chats}) => {
    if(!chats) return null;
    //console.log(selectedChat)
    return(
        <ul className="list-group">
            {Object.keys(chats).map(chatsname => {
                return (<li 
                    key={chatsname}
                    className="list-group-item d-flex justify-content-between align-items-center" 
                    onClick={() => selectChat(chatsname)}>
                        {chats[chatsname].username}
                        <Badge bg="warning" pill="true">{Object.keys(chats[chatsname].history).length}</Badge>
                    </li>)
            })}
        </ul>
    )
}

//<button onClick={() => setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default SelectChat;