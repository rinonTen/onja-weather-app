import React from 'react'

// Date today to compare with the date in the api
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
month = "0" + month; 
let year = today.getFullYear();

if(day<10) return day= '0' + day;

//date today formated
today = year + '-' + month + '-' + day;
console.log(today);
if(month<10) return month = '0' + month;
 

export default function TodayWeatherComponent() {
    return (
        <div>
            <ul>
                <li>15C</li>
                <li>Shower</li>
                <li>
                    <span>Today</span>
                    <span>Frid 6, jan</span>    
                </li>
                <li className="city">Helensky</li>
            </ul>
        </div>
    )
}
