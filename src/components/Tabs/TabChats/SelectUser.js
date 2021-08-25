import React from "react";
import {Badge} from "react-bootstrap";

const SelectUser = ({users, selectUser}) => {
    //console.log(platform)
    if(!users) return null;
    return(
        <ul className="list-group">
            {Object.keys(users).map(username => {
                return (<li 
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={username} 
                    onClick={() => selectUser(username)}>{username}
                    <Badge bg="warning" pill="true">{Object.keys(users[username].chats).length}</Badge>
                    </li>
                    )
            })}
        </ul>
    );
        
}
/*
  */
//<button onClick={() => this.props.setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default SelectUser;