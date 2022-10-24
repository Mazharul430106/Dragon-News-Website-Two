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
                    <Col lg="7" className='order-lg-1 order-2'>
                         <Outlet></Outlet>
                    </Col>
                    <Col lg="3" className='order-lg-2 order-1'>
                       <RightSideBar></RightSideBar>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Main;