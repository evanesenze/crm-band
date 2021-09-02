import React, {useEffect, useState} from "react";
import {Badge} from "react-bootstrap";
import {database} from "../../../base";

const SelectUser = ({usersRef, selectUser, users, setUsers}) => {
    //console.log(platform)
    // const [users, setUsers] = useState({});
    useEffect(() => {
        //console.log(usersRef);
        let a = database.ref(usersRef);
        a.on('value', value => {
            setUsers(value.val() || {});
            //console.log(history.current);
        });
        return () => {
            a.off();
        }
    },[]);
    if(!users) return null;

    return(
        <ul className="list-group">
            {
                Object
                    .keys(users)
                    .sort((a, b) => {
                        let first = Object.keys(users[a].chats).filter(chatId => users[a].chats[chatId].unread_messages).length;
                        let second = Object.keys(users[b].chats).filter(chatId => users[b].chats[chatId].unread_messages).length;
                        //console.log('first>> ' + first);
                        //console.log('second>> ' + second);
                        return first>second?-1:first<second?1:0;
                    })
                    .map(username => {
                        let user = users[username];
                        let count = Object
                            .keys(user.chats)
                            .filter(chatId => !!user.chats[chatId].unread_messages).length || '';
                        return (
                            <li 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={username} 
                                onClick={() => selectUser(username)}>{username}
                                <Badge bg="warning" pill="true">{count}</Badge>
                            </li>
                            );
                    })
            }
        </ul>
    );
        
}
/*
  */
//<button onClick={() => this.props.setSelectedChat({selectedChat: null, selectedChatId: null})}>Назад</button>

export default SelectUser;