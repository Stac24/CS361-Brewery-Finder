import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import CitySearch from '../components/CitySearch'

export default function Home() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState();
    const [show, setShow] = useState(false);

    const handleChange = (e) =>{
        setInput(e.target.value);
        
    };
    const searchCity = async() =>{
        const res = await axios.get("https://api.openbrewerydb.org/breweries?by_city=" + input)
        // console.log(res.data)
        // console.log(input)
        setOutput(res.data[0])
        setShow(true)
        console.log(output)
       
      }


    return (
        <div className='homePage'>
            <h1>Brewery Finder</h1>
            <p>Please use the search boxes below to search for breweries based off of city, zip code, or type of brewery: </p>
            <p className='examples'>Example searches are located within each input box below</p>
            <form className='allSearches'>
                <div className='searchTopic'>
                    <label>Search By City: </label>
                    <input onChange={handleChange} type="text" id="city" name="city" placeholder='Portland...' />
                    <button type='button' onClick={searchCity}>Search</button>
                </div>
                <div className='searchTopic'>
                    <label>Search By Type*: </label>
                    <input placeholder='micro...' />
                    <button>Search</button>
                </div>
                <div>
                    <label>Search for a Random Brewery: </label>
                    <button>Search</button>
                </div>
            </form>
            <p>*See FAQ page to read more about brewery types!</p>
            <p><strong>Note:</strong> When you make a new search, your current search results will be replaced with your new search results.</p>
            <p><strong>Results:</strong></p>
            <div className='results'>
                {show ? <CitySearch data={output}/> : " "}
            </div>

        </div>
    )
}

