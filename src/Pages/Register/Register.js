import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleFormRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ph_Url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name,email,password,ph_Url);
        handleCreateUser(email,password);
        form.reset();
    }

    const handleCreateUser = (email,password)=>{
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.error('error',error);
        })

    }

    return (
        <Form onSubmit={handleFormRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ph_URL</Form.Label>
                <Form.Control type="text" name='url' placeholder="Enter Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;