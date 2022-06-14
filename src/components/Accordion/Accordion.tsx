import React, {useState} from "react";

type titleValueType = {
    titleValue1: string
    titleValue2: string

}


export const Accordion = (props: titleValueType) => {
    return (
        <div>
            <AccordionTitle title1={props.titleValue1}/>
            <AccordionBody title2={props.titleValue2}/>
        </div>
    )
}

type title1Type = {
    title1: string
}

let AccordionTitle = (props: title1Type) => {
    return (
        <div>
            <h1>{props.title1}</h1>
            <h3>Menu</h3>
        </div>
    )
}

type title2Type = {
    title2: string
}
export let AccordionBody = (props: title2Type) => {
    let [collapsed, setCollapsed] = useState(true)
    if (collapsed === true) {
        return (
            <ul>
                <button onClick={() => setCollapsed (false)}>{props.title2}</button>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    } else {
        return (
            <ul>
                <button onClick={()=>setCollapsed(true)}>{props.title2}</button>
            </ul>
        )
    }
}
