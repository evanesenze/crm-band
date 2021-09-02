import React, {useEffect, useState} from "react";
import base, {database} from "../../../base";

import ChatComponent from "./ChatComponent";
import SelectPlatform from "./SelectPlatform";
import SelectUser from "./SelectUser";
import SelectChat from "./SelectChat";
import ChatsBreadcrumb from "./ChatsBreadcrumb";

const TabChats = (props) => {

    const _states = {
        selectPlatform: 'selectPlatform',
        selectUser: 'selectUser',
        selectChat: 'selectChat',
        openedChat: 'openedChat'
    }

    const [state, setState] = useState(_states.selectPlatform);
    const [platform, setPlatform] = useState("");
    const [users, setUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState("");
    const [chats, setChats] = useState(null);
    const [selectedChat, setSelectedChat] = useState("");

    const getRoute = () => {
        let res = [];
        if(platform) res.push(
            {
                name: platform,
                resetFunc: () => {
                    setPlatform("");
                    setSelectedUser("");
                    setSelectedChat("");
                    setState(_states.selectPlatform);
                }
            }
        )
        if(selectedUser) res.push(
            {
                name: selectedUser,
                resetFunc: () => {
                    setSelectedUser("");
                    setSelectedChat("");
                    setState(_states.selectUser);
                }
            }
        )
        if(selectedChat) res.push(
            {
                name: chats[selectedChat].username || `Чат №${selectedChat}`,
                resetFunc: () => {
                    setSelectedChat("");
                    setState(_states.selectChat);
                }
            }
        )
        
        
        return res;
    }
    
    useEffect(() => {if(!platform) setUsers(prev => null)},[platform]);

    let pageContent = null;
    
    const selectPlatform = (e) => {
        setPlatform(prev => e.target.value);
        setState(prev => _states.selectUser);
    }

    const selectUser = (username) => {
        setSelectedUser(prev => username);
        setState(prev => _states.selectChat);
    }

    const selectChat = (chatname) => {
        setSelectedChat(prev => chatname);
        setState(prev => _states.openedChat);
    }
    console.log(state);
    switch (state){
        case _states.selectPlatform:
            return (<SelectPlatform selectPlatform={selectPlatform}/>);
        case _states.selectUser: 
            pageContent = (<SelectUser 
                usersRef={`${platform}/users/`}
                selectUser={selectUser}
                users={users}
                setUsers={setUsers}/>);
            break;
        case _states.selectChat: 
            pageContent =  (<SelectChat
                chatsRef={`${platform}/users/${selectedUser}/chats/`}
                selectChat={selectChat}
                chats={chats}
                setChats={setChats}/>);
            break;
        case _states.openedChat:
            pageContent = (<ChatComponent
                selectedChat={selectedChat}
                selectedUser={selectedUser}
                platform={platform}
                chats={chats}
                users={users}
               />);
            break;
    }
    // if(!platform) 
    // if(selectedChat) 
    // else if(!selectedChat && chats) 
    // else if(!selectedUser && users) 
    return (
        <React.Fragment>
            <ChatsBreadcrumb getRoute={getRoute}/>
            <div className="page-content">
                {pageContent}
            </div>
        </React.Fragment>

    )
        // {
        //     //console.log('render');
        //     let a = null;
        //     if(this.state.selectedChat && this.state.selectedChatId){
        //         a = (<ChatComponent
        //             selectedChat={this.state.selectedChat}
        //             selectedChatId={this.state.selectedChatId}
        //             selectedUser={this.state.selectedUser}
        //             setSelectedChat={this.setSelectedChat}/>)
        //     }
        //     else if(this.state.selectedUser && this.state.chats){
        //         a = (<SelectChat
        //             chats={this.state.chats}
        //             setSelectedChat={this.setSelectedChat}
        //             setSelectedUser={this.setSelectedUser}/>)
        //     }
        //     else if(this.state.users) a = (<SelectUser 
        //             users={this.state.users}
        //             setSelectedUser={this.setSelectedUser}/>)
        //     return(
        //         <React.Fragment>
                    
        //             {a}
        //         </React.Fragment>
        //     )
            
        // }
}

/*state = {
        platform: "",
        users: null,
        selectedUser: null,
        chats: null,
        selectedChat: null,
        selectedChatId: null
    }

    setSelectedUser = async ({selectedUser}) =>{
        await this.setState({selectedUser});
        this.loadChats();
    }

    setSelectedChat = async ({selectedChat, selectedChatId}) =>{
        await this.setState({selectedChat, selectedChatId});
    }

    loadChats = () => {
        //console.log(`${this.state.platform}/users/${this.state.selectedUser}/chats`);
        this.ref = base.syncState(`${this.state.platform}/users/${this.state.selectedUser}/chats`, {
            context: this,
            state: "chats"
        });
    }


    loadUsers = () => {
        //console.log(`${this.state.platform}/users/`);
        this.ref = base.syncState(`${this.state.platform}/users/`, {
            context: this,
            state: "users"
        });
    }

    componentWillUnmount(){
        if(this.ref)
            base.removeBinding(this.ref);
    }
    
    setPlatform = async (e) => {
        //console.log(e.target.value);
        await this.setState({platform: e.target.value, selectedUser: null, chats: null, selectedChat: null, selectedChatId: null});
        this.loadUsers();
    } */
 // <ChatComponent 
                    //     selectedChat={this.state.selectedChat}
                    //     selectedChatId={this.state.selectedChatId}
                    //     setSelectedChat={this.setSelectedChat}

/*
let a = (
            
        );
        if(this.state.users){
            a += (
                
            )
        }
        return(
            <React.Fragment>
                {a}
            </React.Fragment>
        ) */
export default TabChats;