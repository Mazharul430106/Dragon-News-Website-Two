import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsDetails = ({ news }) => {
    console.log(news)
    const { author, details, image_url, title, rating, total_view, _id } = news;

    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-2'>
                    <div>
                        <Image src={author.img}
                            style={{ height: '60px' }}
                            roundedCircle
                        >
                        </Image>
                    </div>

                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p className='mb-0'>{author.published_date}</p>
                    </div>
                </div>

                <div>
                    <FaBookmark className='me-1'></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsDetails;