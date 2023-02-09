import React from "react";
import '../App.css';


export default function SearchDisplay({data}) {
    if(data.length == 0){
        return(
            <h2 className="invalidMessage">No breweries found!</h2>
        )
    } else{
        return(
            <div>
                {data.map((brewery, i) => {
                    return(
                        <div className="brewObject">
                            <h3>Name: {brewery.name}</h3>
                            <h3>Type: {brewery.brewery_type}</h3>
                            <h3>Address: {brewery.street} {brewery.city} {brewery.state} {brewery.postal_code}</h3>
                            <h3>Phone Number: {brewery.phone}</h3>
                            <h3>Website: <a className="brewLinks" href={brewery.website_url}>{brewery.website_url}</a> </h3>
                        </div>
                    )
                })}
            </div>
        )
        

    }

};
