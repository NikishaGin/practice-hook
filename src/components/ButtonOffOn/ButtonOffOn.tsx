import {useState} from "react";

export const ButtonOffOn = () => {

    let [on, setON] = useState(false)

    const ButtonOn = {
        backgroundColor: on ? 'green' : 'white'
    }

    const ButtonOff = {
        backgroundColor: on ? 'white' : 'red'
    }

    const Button = {
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <button style={ButtonOn} onClick={()=>{setON(true)}}>On</button>
            <button style={ButtonOff} onClick={()=>{setON(false)}}>Off</button>
            <button style={Button} onClick={()=>{setON(false)}}></button>
        </div>
    )
}