import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Water');
    const [results, setResults] = useState([]);
    console.log(results)
    useEffect(() => {
        const search = async() => {
            const {data} = await axios.get("https:/en.wikipedia.org/w/api/php", {
               params : {
                   action : 'query',
                   list : 'search',
                   origin : '*',
                   format : 'json',
                   srsearch : term
               } 
            });
            setResults(data.query.search)
        }
            search();

    }, [term])
    const renderedResults = results.map((result) => {
        return <div className = "item">
            <div className = "content">
                <div className = "header">
                    {result.title}
                </div>
                {result.snippet}
            </div>
        </div>
    
    })
    return(
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Search</label>
                    <input className = "input" value = {term} onChange = {e => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className = "ui celled list">{renderedResults}</div>
        </div>
    );
}

export default Search;
