import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const News = useLoaderData();
    console.log(News)
    const {image_url,details,title,category_id} = News;

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {details}
                </Card.Text>
                <Button variant="primary">
                    <Link className='text-white text-decoration-none' to={`/category/${category_id}`}> Go Back All Category News </Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default News;