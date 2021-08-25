import {Badge} from 'react-bootstrap';

export default function ({message, owner, sender}){
    
    const getTime = (time) => {
        let t = time ? new Date(time) : new Date();
        return `${t.getHours()}:${t.getMinutes()}`;
    }
    
    return(
        <li>
            <div className="message-item">
                <Badge bg="secondary">{message.own ? owner : sender}</Badge>
                {getTime(message.date)}  
                <div className="message-text">{message.text}</div>
            </div>
        </li>
    )
}