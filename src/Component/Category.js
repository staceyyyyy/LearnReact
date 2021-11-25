import { useEffect, useState } from "react";
import React from 'react';
import {Link} from "react-router-dom";

export default function Category() {
    const [categories,setCategories] = useState(null);
    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const res = await data.json();
        setCategories(res.categories);
    }

    useEffect(()=>{
        fetchData();
    },[])
    console.log("cat",categories);
    return (
        <div className="container">
            <h2>Our Menu Category</h2>
            {categories ? (
                <div>
                    {categories.map(cat=> {
                        return <Link to={`category/detail/${cat.strCategory}`} key={cat.idCategory} >
                                    <div key={cat.idCategory} className={cat.idCategory%2===0 ? "genap": "ganjil"}>
                                        <img src={cat.strCategoryThumb} alt={cat.strCategory}/>
                                        <p>{cat.strCategory}</p>
                                    </div>
                                </Link>
                    })}
                </div>
            ) : <p>Loading</p>}
        </div>
    )
}
