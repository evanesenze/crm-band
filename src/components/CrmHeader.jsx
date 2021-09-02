import React from 'react';
import firebase from "firebase"
import { User } from "../classes";
import PropTypes from 'prop-types';



const CrmHeader = props => {
    
    const signOut = () => {
        firebase.auth().signOut();
        window.location.reload();
    }

    return(
        <header>
            <div className="user-info"> 
                <img className="user-image" src={props.user.image}></img>
                <div className="user-name">
                    {props.user.name}
                </div>
            </div>
            <button onClick={signOut}>Выйти</button>
        </header>
    )
}

CrmHeader.propTypes = {
    user: PropTypes.object
}

export default CrmHeader;