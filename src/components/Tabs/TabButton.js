import firebase from "firebase"
import PropTypes from 'prop-types';
import { Tabs, TabNames } from "../../classes";



const TabButton = ({changeActiveTab, tabIco, tabName, activeTab}) => {
    //const path = `/img/${props.tabName}.svg`;
    const className = activeTab === tabName ? 'active' : '';

    return(
        <li className={`nav-item tabButton ${className}`} onClick={ () => changeActiveTab(tabName) }>
            {tabIco}
            <div className="tabName">
                {TabNames[tabName]}
            </div>
        </li>
    )
}
/*
<div className={`tabButton ${className}`} onClick={()=>props.changeActiveTab(props.tabName)}>
            {props.tabIco}
            <div className="tabName">
                {TabNames[props.tabName]}
            </div>
        </div> */

//<img src={`/img/${props.tabName}.svg`} width="50%" className={className}></img>
TabButton.propTypes = {
    tabName: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
}

export default TabButton;