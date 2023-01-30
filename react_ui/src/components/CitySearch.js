import React from "react";


export default function CitySearch({data}) {
    if(typeof(data) == "undefined"){
        return(
            <h2>Invalid Search: Please try again!</h2>
        )
    } else{
        return(
            <h2>{data.name}</h2>
        )

    }

 
};
