//import firebase from "firebase"
import PropTypes from 'prop-types';
import { Tabs, TabNames } from "../classes";
import TabButton from './Tabs/TabButton';


const CrmFooter = props => {

    const tabsNames = Object.keys(TabNames);

    const changeActiveTab = (tabName) => {
        if(tabName === props.activeTab) return;
        props.setActiveTab(tabName);
    }
    
    return(
        <div className="navbar navbar-expand footer-nav container">
            <ul className="navbar-nav nav-ul">
                {tabsNames.map(x => <TabButton 
                    key={x} 
                    tabName={x} 
                    activeTab={props.activeTab} 
                    tabIco={Tabs[x]}
                    changeActiveTab={changeActiveTab}/>)}
            </ul>
        </div>
        
    )
}

/*<footer>
            {tabsNames.map(x => <TabButton 
                key={x} 
                tabName={x} 
                activeTab={props.activeTab} 
                tabIco={Tabs[x]}
                changeActiveTab={changeActiveTab}/>)}
        </footer> */

CrmFooter.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired
}

export default CrmFooter;