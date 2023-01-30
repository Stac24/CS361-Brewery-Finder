import React from 'react';

function Faq() {
    return (
        <div className='faqPage'>
            <h1 className='faqTitle'>FAQ Page</h1>
            <ul className='questionList'>
                <div className='qaGroup'>
                    <li className='question'>What are the types of breweries?</li>
                    <p>The brewery types that you can search for include: micro, nano,
                        regional, brewpub, large, planning, bar, contract, and proprietor.
                    </p>
                </div>
                <div className='qaGroup'>
                    <li className='question'>What is a micro brewery?</li>
                    <p>A microbrewery is typically a smaller brewery that specializes in specific kinds of beer</p>
                </div>
                <div className='qaGroup'>
                    <li className='question'>What is a nano brewery?</li>
                    <p>A nano brewery is the smallest type of brewery which only produces small amounts of beer
                        (by definition, less than 15,000 barrels of beer per year)
                    </p>
                </div>
                <div className='qaGroup'>
                    <li className='question'>What is a brewpub?</li>
                    <p>Typically, brewpubs are restaurants that serve food but also have a brewery on-premise</p>
                </div>
                <div className='qaGroup'>
                    <li className='question'>Nothing came up when I searched, what went wrong?</li>
                    <p>Please go back and check your spelling to ensure that you have searched for your desired
                        breweries. It is also possible that nothing was found resulting from that particular search.
                    </p>
                </div>
                <div className='qaGroup'>
                    <li className='question'>What does it mean when the type of brewery is 'closed'?</li>
                    <p>The brewery that you see on your search is one that has gone out of business
                    </p>
                </div>
            </ul>
            <p className='furtherQuestions'>If you didn't find the answer you were looking for here, or are 
                having troubles with the website please email us at <strong>findabrew@yahoo.com</strong>
            </p>
        </div>
    )
}

export default Faq;