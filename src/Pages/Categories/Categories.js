import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>{categoryNews.length}</h1>
        </div>
    );
};

export default Categories;