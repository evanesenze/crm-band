import firebase from "firebase"
import { TabNames } from "../classes"
import TabChats from "./Tabs/TabChats/TabChats"
import TabCalendar from "./Tabs/TabCalendar/TabCalendar"

const CrmContent = props => {
    
    const tabsHandler = {
        chats: <TabChats user={props.user}/>,
        calendar: <TabCalendar/>,
        leads: 'Лиды',
        settings: 'Настройки',
        transactions: 'Сделки'
    }


    return(
        <div className="main">
            {tabsHandler[props.activeTab] || null}
        </div>
    )
}

export default CrmContent;