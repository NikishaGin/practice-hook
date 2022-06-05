import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {ButtonOffOn} from "./components/ButtonOffOn/ButtonOffOn";

function App() {
    return (
        <div className="App">
            <ButtonOffOn />
            <ButtonOffOn />
            <ButtonOffOn />
            <Accordion titleValue={'Menu'}/>
            <Rating/>

        </div>
    );
}




export default App;
