import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Iframe from 'react-iframe';

export default function(){
    
    
    const click = () => {
        fetch('https://script.google.com/macros/s/AKfycbzVuOb_cBZRkcL8-FWRnRpNU8cf4J1ignWRRjJY10QzFXa9noo8UXVOWnVueRk_McJd/exec',
        {
            method: 'POST',
            mode:'no-cors',
            body: {
                name:123
            }
        })
    }

    
    return(
        <React.Fragment>
            <div className="calendar-frame">
                <Iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FMoscow&src=aGo4a3JtdHBlcG5nanM2ZXFoMDlhaWpraGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548&showTitle=0&showNav=1&showDate=1&showPrint=0&showCalendars=0&showTz=0&mode=WEEK&showTabs=1"
                        style="border:solid 1px #777" 
                        width="800" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no" /> 
            </div>
            <div>
                <button onClick={click}>123</button>
            </div>
        </React.Fragment>
    )
}

/*
    const calendars = [
        {calendarId: "hj8krmtpepngjs6eqh09aijkhk@group.calendar.google.com"}
    ];

    const getEvents = () => {
        const CALENDAR_ID = 'hj8krmtpepngjs6eqh09aijkhk@group.calendar.google.com'
        const API_KEY = 'AIzaSyCRj4Rr8xsKYalYsQXaqMRwvaw5qQNVwvc'
        let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
        fetch(url).then(x=> console.log(x));
    }

    const click = (v,e) => {
        console.log(v);
        console.log(e);
        //getEvents();
    }
*/