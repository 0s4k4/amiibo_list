// src/components/AmiiboList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AmiiboList = () => {
    const [amiibos, setAmiibos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://amiiboapi.com/api/amiibo/')
            .then(response => {
                setAmiibos(response.data.amiibo);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Amiibo List</h1>
            <ul>
                {amiibos.map(amiibo => (
                    <li key={amiibo.tail}>
                        <img src={amiibo.image} alt={amiibo.name} />
                        <p>{amiibo.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AmiiboList;
