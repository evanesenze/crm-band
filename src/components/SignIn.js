import React from 'react';
import Login from './Login';
import firebase from 'firebase';
import {firebaseApp} from '../base';
import {User} from '../classes';


class SingIn extends React.Component {

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.authHandler({user});
            }
        });
    }

    authHandler = async (authData) => {
        console.log(authData);
        let user = new User(authData.user || authData);
        this.props.setUser(user);
    }

    auth = () => {
        const authProvider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    render(){
        if(!this.props.user) return (<Login auth={this.auth}/>)
        return this.props.children;
    }
}

export default SingIn;