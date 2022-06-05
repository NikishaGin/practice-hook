import React, {useState} from "react";

type PropsAccordionType = {
    titleValue: string

}

export function Accordion(props: PropsAccordionType) {

        let [open, setOpen]=useState(true)

        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={()=>{setOpen(!open)}}>Open</button>
                { ! open  && <AccordionBody/>}

            </>
        )

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )}
}


