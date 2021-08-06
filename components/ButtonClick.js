import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import colorsAndHexes from './colors';


const ButtonClick = () => {
    const [term, setTerm] = useState('');
    const [color, setColor] = useState('');
    let bgColor 
    let i
    const onTitleClick = () => {
        if(colorsAndHexes.colors.includes(term.toLowerCase())){
            for(i = 0; i <= colorsAndHexes.colors.length; i++){
                if(colorsAndHexes.colors[i].toLowerCase() === term.toLowerCase()){
                    bgColor = colorsAndHexes.colorHexes[i]
                    setColor(colorsAndHexes.colors[i])
                }
            }
        }
        else{
            bgColor = "grey"
            setColor("Not Found")
        }
        // console.log("Title Clicked", index);
    
        
    }
    return(
        <div style = {{justifyContent : 'center', alignItems : 'center', textAlign : 'center', display : 'flex'}}>
            <div className = "ui form" style = {{flex: 1}}>
                <div className = "field" style = {{paddingTop : 50}}>
                    <h1>Enter a color</h1>
                    <h3>{color}</h3>
                    <input style = {{width: 500}}className = "input" value = {term} onChange = {e => setTerm(e.target.value)}/>
                    <button style = {{backgroundColor : bgColor, marginLeft : 10}} className = "buttonClick ui button" onClick = {() => onTitleClick()}>Enter your color</button>
                </div>
            </div>
        </div>
    );
}

export default ButtonClick;