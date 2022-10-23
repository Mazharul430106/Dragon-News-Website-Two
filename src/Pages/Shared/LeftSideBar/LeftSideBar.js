import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
   const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    
    return (
        <div>
            <h5>Total Categories : {categories.length}</h5>

            {
                categories.map(category=> <p key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link> </p>)
            }

        </div>
    );
};

export default LeftSideBar;