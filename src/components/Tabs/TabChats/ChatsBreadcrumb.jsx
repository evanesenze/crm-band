import React from 'react';

export default function ChatsBreadcrumb({getRoute}){
    //console.log(route);
    const route = getRoute();
    return(
        <nav className="bread" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {route.map((item, index) => {
                    return (<li 
                        key={index}
                        className={`breadcrumb-item${index === route.length -1 ? ' active': ''}${index === 0 ? ' platform': ''}`} 
                        aria-current="page"
                        onClick={() => item.resetFunc()}>{item.name}</li>)
                })}
            </ol>
        </nav>
    )
}