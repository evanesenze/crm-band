

export default function ChatsBreadcrumb({route}){
    console.log(route);
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