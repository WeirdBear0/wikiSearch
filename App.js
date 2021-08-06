import React from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';
import ButtonClick from './components/ButtonClick';
import axios from 'axios';

const items = [
    {
        title : 'What is React?',
        content : 'React is a front end javascript framework'
    },
    {
        title : 'Why use React?',
        content : 'It is an easy way to create powerful, dynamic websites'
    },
    {
        title: "How to use React?",
        content : 'By creating components'
    }
]
export default() => {
    return (
        <div>
            {/*<Accordion items = {items}/>*/}
            <Search/>
            {/*<ButtonClick/>*/}
        </div>
    ); 
};

