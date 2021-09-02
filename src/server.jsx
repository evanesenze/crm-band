export async function sendTelegramMessage({username, chat_id, text}) {
    console.log(1);
    const params = JSON.stringify({username,chat_id,text});
    console.log(params);
    fetch('https://crm-band-server.glitch.me/api/telegram/sendMessage',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: params,
    }).then(x=>console.log).catch(x=>console.log);
}

export async function sendInstagramMessage({username, chat_id, text}){
    console.log(1);
    const params = JSON.stringify({username,chat_id,text});
    console.log(params);
    fetch('https://crm-band-server.glitch.me/api/instagram/sendMessage',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: params,
    }).then(x=>console.log).catch(x=>console.log);
}