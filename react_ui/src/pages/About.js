import React from 'react';
import '../App.css';

function About() {
    return (
        <div className='aboutPage'>
            <h1>About Our Website</h1>
            <p className='aboutSummary'>As lovers of beer, this website has been created in order to help you find the perfect brewery for
                your occasion. Whether you are looking for a large setting to bring a big group, or a small intimate
                brewery to catch up with a friend, our search has got you covered! Use the buttons above to navigate to our
                home page and give it a try! 
            </p>
            <img className='image' src='https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
            <p>This website was created using the <a className='apiLink' href='https://www.openbrewerydb.org/'>Open Brewery DB API</a></p>
        </div>
    )
}

export default About;