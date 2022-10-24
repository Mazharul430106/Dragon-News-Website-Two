import React from 'react';
import {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();

    if(loding){
        return  <Spinner animation="border" variant="warning" />
    }

    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

 
};

export default PrivateRoutes;