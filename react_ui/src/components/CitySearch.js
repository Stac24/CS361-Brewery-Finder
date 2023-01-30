import React from "react";
import '../App.css';


export default function CitySearch({data}) {
    if(data.length == 0){
        return(
            <h2 className="invalidMessage">Invalid Search: Please try again!</h2>
        )
    } else{
        return(
            <div>
                <div className="brewObject">
                    <h3> Name: {data[0].name}</h3>
                    <h3>Type: {data[0].brewery_type}</h3>
                    <h3>Address: {data[0].street} {data[0].city} {data[0].state} {data[0].postal_code}</h3>
                    <h3>Phone Number: {data[0].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[0].website_url}>{data[0].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[1].name}</h3>
                    <h3>Type: {data[1].brewery_type}</h3>
                    <h3>Address: {data[1].street} {data[1].city} {data[1].state} {data[1].postal_code}</h3>
                    <h3>Phone Number: {data[1].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[1].website_url}>{data[1].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[2].name}</h3>
                    <h3>Type: {data[2].brewery_type}</h3>
                    <h3>Address: {data[2].street} {data[2].city} {data[2].state} {data[2].postal_code}</h3>
                    <h3>Phone Number: {data[2].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[2].website_url}>{data[2].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[3].name}</h3>
                    <h3>Type: {data[3].brewery_type}</h3>
                    <h3>Address: {data[3].street} {data[3].city} {data[3].state} {data[3].postal_code}</h3>
                    <h3>Phone Number: {data[3].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[3].website_url}>{data[3].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[4].name}</h3>
                    <h3>Type: {data[4].brewery_type}</h3>
                    <h3>Address: {data[4].street} {data[4].city} {data[4].state} {data[4].postal_code}</h3>
                    <h3>Phone Number: {data[4].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[4].website_url}>{data[4].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[5].name}</h3>
                    <h3>Type: {data[5].brewery_type}</h3>
                    <h3>Address: {data[5].street} {data[5].city} {data[5].state} {data[5].postal_code}</h3>
                    <h3>Phone Number: {data[5].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[5].website_url}>{data[5].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[6].name}</h3>
                    <h3>Type: {data[6].brewery_type}</h3>
                    <h3>Address: {data[6].street} {data[6].city} {data[6].state} {data[6].postal_code}</h3>
                    <h3>Phone Number: {data[6].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[6].website_url}>{data[6].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[7].name}</h3>
                    <h3>Type: {data[7].brewery_type}</h3>
                    <h3>Address: {data[7].street} {data[7].city} {data[7].state} {data[7].postal_code}</h3>
                    <h3>Phone Number: {data[7].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[7].website_url}>{data[7].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[8].name}</h3>
                    <h3>Type: {data[8].brewery_type}</h3>
                    <h3>Address: {data[8].street} {data[8].city} {data[8].state} {data[8].postal_code}</h3>
                    <h3>Phone Number: {data[8].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[8].website_url}>{data[8].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[9].name}</h3>
                    <h3>Type: {data[9].brewery_type}</h3>
                    <h3>Address: {data[9].street} {data[9].city} {data[9].state} {data[9].postal_code}</h3>
                    <h3>Phone Number: {data[9].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[9].website_url}>{data[9].website_url}</a> </h3>
                </div>
                <div className="brewObject">
                    <h3>Name: {data[10].name}</h3>
                    <h3>Type: {data[10].brewery_type}</h3>
                    <h3>Address: {data[10].street} {data[10].city} {data[10].state} {data[10].postal_code}</h3>
                    <h3>Phone Number: {data[10].phone}</h3>
                    <h3>Website: <a className="brewLinks" href={data[10].website_url}>{data[10].website_url}</a> </h3>
                </div>
            </div>
            
        )
        

    }

};
