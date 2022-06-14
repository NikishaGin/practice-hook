import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingNumberType} from "./components/Rating/Rating";
import {ButtonOnOf} from "./components/OnOf/OnOf";


function App() {

    let [ratingValue, setValue] = useState<RatingNumberType>(4)

    return (
        <div className="App">
            {/*<PageTitle title={"This is App component"}/>*/}
            <Accordion titleValue1={'Menu'} titleValue2={'Users'} />
            <Rating value={ratingValue} onClick={setValue}  />
            <ButtonOnOf />
            <ButtonOnOf />
            <ButtonOnOf />
            <ButtonOnOf />
            <ButtonOnOf />
        </div>
    );
}

type PageTitleProps = {
   title:string
 }

let PageTitle = (props: PageTitleProps) => {
    return (
        <h1>{props.title}</h1>
    )
}










export default App;
