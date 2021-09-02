import React from 'react';
import firebase from "firebase"
import { TabNames } from "../classes"
import TabChats from "./Tabs/TabChats/TabChats"
import TabCalendar from "./Tabs/TabCalendar/TabCalendar"
import FacebookLogin from "react-facebook-login";

const CrmContent = props => {
    
    const tabsHandler = {
        chats: <TabChats user={props.user}/>,
        calendar: <TabCalendar/>,
        leads: 'Лиды',
        settings: (
            <FacebookLogin
          appId="571064564252338"
          autoLoad={true}
          fields="name,email,picture"
          callback={(e) => console.log(e)}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
        ),
        deals: 'Сделки'
    }

    return(
        <div className="main">
            {tabsHandler[props.activeTab] || null}
        </div>
    )
}

export default CrmContent;