import React from 'react';
import { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState(new Date());
    const refreshTime = ()=> {
        setTime(new Date())
    }
    useEffect(()=> {
        const timer = setInterval(refreshTime,1000)
        return function cleanTime() {
            clearInterval(timer);
        };
    },[])
    const day = time.toLocaleString();
    return (
        <div>
            <h1>Welcome to iCUBE RESTAURANT</h1>
            <h5>Today: {day}</h5>
        </div>
    )
}
