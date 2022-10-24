
import React, { useContext,useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile,varifyEmail } = useContext(AuthContext);
    const [acepte, setAcepte] = useState(false);

    const handleFormRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
     
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleVarifiedEmail();
                toast.success('Please Verify your Email Address Before Login')
            })
            .catch(error => {
                console.error('error', error);
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => console.log(error))
    }

    const handleAcepted = (event)=>{
       setAcepte(event.target.checked)
    }

    const handleVarifiedEmail = ()=> {
        varifyEmail()
        .then(()=>{})
        .catch(error=> {
            console.log(error);
        })
    }



    return (
        <Form onSubmit={handleFormRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ph_URL</Form.Label>
                <Form.Control type="text" name='url' placeholder="Enter Url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" 
                    onClick={handleAcepted}
                    name='checkedbox'
                    label={<>Acepte <Link to={'/trams'}>Trams and Conditions</Link></>}/>
            </Form.Group>

            <Button variant="primary" type="submit" disabled ={!acepte} >
                Register
            </Button>
        </Form>
    );
};

export default Register;