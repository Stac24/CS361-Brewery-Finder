import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import SearchDisplay from '../components/SearchDisplay'
//const { io } = require("socket.io-client");
import { io } from 'https://cdn.socket.io/4.3.2/socket.io.esm.min.js';


export default function Home() {
    const [city, setCity] = useState('');
    const [type, setType] = useState('');
    const [output, setOutput] = useState();
    const [show, setShow] = useState(false);


    const changeCity = (e) =>{
        setCity(e.target.value.toLowerCase());
        
    };

    const changeType = (e) =>{
        setType(e.target.value.toLowerCase());
    }

    const searchCity = async() =>{
        const res = await axios.get("https://api.openbrewerydb.org/breweries?by_city=" + city)
        // console.log(res.data)
        // console.log(input)
        setOutput(res.data)
        setShow(true)
      }

    const searchType = async() =>{
        const res = await axios.get("https://api.openbrewerydb.org/breweries?by_type=" + type)
        setOutput(res.data)
        setShow(true)
      }

    const getRandom = () =>{
        const socket = io("http://localhost:44441");
        socket.on("getRandBrewery", (breweryInfo) => {
            setOutput(breweryInfo)
            setShow(true)
        });

    }

    // const randClicked = () =>{
    //     socket.emit('randBrew');
    //     socket.on("getRandBrewery", (breweryInfo) => {
    //         setOutput(breweryInfo)
    //         setShow(true)
    //     });
    // }
    
    

    return (
        <div className='homePage'>
            <h1>Brewery Finder</h1>
            <p>Please use the search boxes below to search for breweries based off of city or type of brewery </p>
            <p>If you'd rather see a random brewery, please click the search button located next to "Search for a Random Brewery"</p>
            <p className='examples'>Example searches are located within each input box below</p>
            <form className='allSearches'>
                <div className='searchTopic'>
                    <label>Search By City: </label>
                    <input onChange={changeCity} type="text" id="city" name="city" placeholder='Portland...' />
                    <button type='button' onClick={searchCity}>Search</button>
                </div>
                <div className='searchTopic'>
                    <label>Search By Type*: </label>
                    <input onChange={changeType} placeholder='Micro...' />
                    <button type='button' onClick={searchType}>Search</button>
                </div>
                <div>
                    <label>Search for a Random Brewery: </label>
                    <button type='button' onClick={getRandom}>Search</button>
                </div>
            </form>
            <p><strong>Results</strong></p>
            <div className='results'>
                {show ? <SearchDisplay data={output}/> : " "}
            </div>
            <p><strong>Note:</strong> When you make a new search, your current search results will be replaced with your new search results.</p>
            <p>*See FAQ page to read more about brewery types!</p>

        </div>
    )
}

