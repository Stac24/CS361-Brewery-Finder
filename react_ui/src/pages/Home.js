import React from 'react';
import '../App.css';

export default function Home() {
    return (
        <div className='homePage'>
            <h1>Brew Finder</h1>
            <p>Please use the search boxes below to search for breweries based off of city, zip code, or type of brewery: </p>
            <p className='examples'>Example searches are located within each input box below</p>
            <form className='allSearches'>
                <div className='searchTopic'>
                    <label>Search By City: </label>
                    <input placeholder='Portland...' />
                    <input type="submit" value="Submit" />
                </div>
                <div className='searchTopic'>
                    <label>Search By Zip: </label>
                    <input placeholder='97035...' />
                    <input type="submit" value="Submit" />
                </div>
                <div className='searchTopic'>
                    <label>Search By Type*: </label>
                    <input placeholder='micro...' />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <p>*See FAQ page to read more about brewery types!</p>
            <p><strong>Note:</strong> When you make a new search, your current search results will be replaced with your new search results.</p>
            <p><strong>Results:</strong></p>
            <div className='results'>
               
            </div>

        </div>
    )
}

