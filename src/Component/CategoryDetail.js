import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from "react-router";

export default function CategoryDetail() {
    const axios = require('axios');
    const [categoriesDet,setCategoriesDet] = useState(null);
    const {name} = useParams();
    async function fetchData() {
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
            console.log(res.data.meals);
            setCategoriesDet(res.data.meals);
        }catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log("detail",categoriesDet);
    return (
        <div className="container">
            <a href="/">Back to Home</a>
            <h2>{name} Detail</h2>
            {categoriesDet ? (
                <div>
                    {categoriesDet.map(det=> {
                        return <div key={det.idMeal}>
                            <img src={det.strMealThumb} alt={det.strMeal}/>
                            <p>{det.strMeal}</p>
                        </div>
                    })}
                </div>
            ) : <p>Loading</p>}
        </div>
    )
}
