import firebase from "firebase"
import CrmHeader from './CrmHeader';
import CrmContent from './CrmContent';
import CrmFooter from './CrmFooter';
import { useState } from "react";
import {TabNames} from '../classes';

const CRM = props => {

    const [activeTab, setActiveTab] = useState('chats');

    return (
        <div className="container wrapper">
            <div className="content">
                <CrmHeader user={props.user}/>
                <CrmContent activeTab={activeTab} user={props.user}/>
                <CrmFooter activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
        </div>
        
    )
}

export default CRM;