import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Header from '../Pages/Shared/Header/Header';
import {Outlet} from 'react-router-dom';
import LeftSideBar from '../Pages/Shared/LeftSideBar/LeftSideBar';
import RightSideBar from '../Pages/Shared/RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideBar></LeftSideBar>
                    </Col>
                    <Col lg="7">
                         <Outlet></Outlet>
                    </Col>
                    <Col lg="3" className='order-0'>
                       <RightSideBar></RightSideBar>
                    </Col>
                </Row>

                {/* <div className='d-flex flex-md-row flex-column-reverse justify-content-between'>
                    
                    <div className='w-md-25' style={{width:'100%'}} >
                        <LeftSideBar></LeftSideBar>
                    </div>
                    <div className='w-md-50'>
                        <Outlet></Outlet>
                    </div>
                    <div className='w-md-25' style={{width:'100%'}} >
                        <RightSideBar></RightSideBar>
                    </div>
                </div> */}

            </Container>
        </div>
    );
};

export default Main;