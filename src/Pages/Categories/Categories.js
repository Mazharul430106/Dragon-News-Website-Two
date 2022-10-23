import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDetails from '../NewsDetails/NewsDetails';

const Categories = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3> Category Data :  {categoryNews.length}</h3>
            {
                categoryNews.map(ctData=> <NewsDetails key={ctData._id} news={ctData}></NewsDetails>)
            }
        </div>
    );
};

export default Categories;