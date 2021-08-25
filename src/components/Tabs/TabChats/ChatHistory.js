import MessageComponent from "./MessageComponent";

export default function ChatHistory({history, owner, sender}){
    if(!history) return null;
    return(
        <div className="chat-history">
            <ul className="">
                {Object.keys(history).map(messageId => {
                    return (<MessageComponent
                            key={messageId}
                            message={history[messageId]}
                            owner={owner} sender={sender}/>)
                })}
            </ul>
        </div>
    )
}