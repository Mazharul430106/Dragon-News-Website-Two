import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGoogle, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import CarouselSlider from '../CarouselSlider/CarouselSlider';


const RightSideBar = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        }) 
        .catch(error=> {
            console.error('error',error);
        })
    }


    const handleFacebookSignIn = ()=>{
        providerLogin(facebookProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.log('error',error);
        })
    }

    const handleGithubSignIn = ()=> {
        providerLogin(gitHubProvider)
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return (
        <div>
            <ButtonGroup className='w-100' vertical>
                <Button onClick={handleGoogleSignIn} className='mb-1 text-start'> <FaGoogle></FaGoogle>  Sign In With Google</Button>
                <Button onClick={handleFacebookSignIn} className='mb-1 text-start'> <FaFacebook></FaFacebook>   Sign In With FaceBook</Button>
                <Button onClick={handleGithubSignIn} className='mb-1 text-start'>  <FaGithub></FaGithub>  Sign In With Github</Button>
            </ButtonGroup>

            <div>
                <h5>Find Us On</h5>
                <div>
                    <ListGroup>
                        <ListGroup.Item> <FaFacebook></FaFacebook> <span>FaceBook</span> </ListGroup.Item>
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