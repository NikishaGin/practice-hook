import {useState} from "react";

export const ButtonOnOf = () => {

    let [on, setOn] = useState(true)

    let styleOn = {
        backgroundColor: on ? 'green' : "white"
    }

    let styleOff = {
        backgroundColor: on ? 'white' : "red"
    }

    let styleIndicator = {
        backgroundColor: on ? 'green' : "red"
    }

    return (
        <div>
            <button style={styleOn} onClick={()=>setOn(true)}>On</button>
            <button style={styleOff} onClick={()=>setOn(false)}>Off</button>
            <button style={styleIndicator} onClick={()=>{}}></button>
        </div>
    )
}