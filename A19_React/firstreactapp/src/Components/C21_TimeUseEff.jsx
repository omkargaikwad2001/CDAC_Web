import { useEffect, useState } from "react"

const Time = ()=>{

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{

        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000);

    },[time]);

    return(
        <>
           <h1>This is time Component</h1>
            <p>Current time  = {time}</p>

        </>
    )

}

export {Time};