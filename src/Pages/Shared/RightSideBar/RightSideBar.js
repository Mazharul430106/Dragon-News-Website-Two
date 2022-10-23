import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGoogle, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import CarouselSlider from '../CarouselSlider/CarouselSlider';


const RightSideBar = () => {
    return (
        <div>
            <ButtonGroup className='w-100' vertical>
                <Button className='mb-1'> <FaGoogle></FaGoogle>  Sign In With Google</Button>
                <Button className='mb-1'> <FaFacebook></FaFacebook>   Sign In With FaceBook</Button>
                <Button className='mb-1'>  <FaGithub></FaGithub>  Sign In With Github</Button>
            </ButtonGroup>

            <div>
                <h5>Find Us On</h5>
                <div>
                    <ListGroup>
                        <ListGroup.Item> <FaFacebook></FaFacebook>  FaceBook</ListGroup.Item>
                        <ListGroup.Item> <FaGoogle></FaGoogle>  Google</ListGroup.Item>
                        <ListGroup.Item> <FaYoutube></FaYoutube>  Youtube</ListGroup.Item>
                        <ListGroup.Item> <FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            
            <div className='mt-3'>
                <CarouselSlider></CarouselSlider>
            </div>
        </div>


    );
};

export default RightSideBar;