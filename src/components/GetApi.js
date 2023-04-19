import React, { useState, useEffect } from 'react';

function GetApi() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/products/3");
            const result = await response.json();
            setData(result.data);
            // setData(result.support);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h1>GET Api</h1>
            {/* <h1>{data.text}</h1>
            <h1>{data.url}</h1> */}
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.year}</h1>
            <h1>{data.color}</h1>
            <h1>{data.pantone_value}</h1>
        </div>
    );
}

export default GetApi;
