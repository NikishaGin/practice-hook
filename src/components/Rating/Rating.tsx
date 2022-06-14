import React, {useState} from "react";

export type RatingNumberType = 0 | 1 | 2 | 3 | 4 | 5

type PropsRatingType = {
    value: RatingNumberType
    onClick: (value: RatingNumberType)=>void

}

export const Rating = (props:PropsRatingType) => {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={0}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={4}/>
        </div>
    )
}

type starType = {
    selected: boolean
    onClick: (value: RatingNumberType)=>void
    value: RatingNumberType
}

let Star = (props: starType) => {

    return <span onClick={()=>props.onClick(props.value)}>
        {props.selected ? <b>Star</b> : "Star"}
    </span>

}