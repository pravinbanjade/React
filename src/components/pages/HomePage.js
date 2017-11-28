import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Header } from 'semantic-ui-react';
import { ModalBar, ModalLine, ModalPie, ModalDoughnut, ModalStock } from '../views/Modal/Modal';
import { MyAlert } from '../views/SweetAlert/SweetAlert';
// import { LoginSwat } from '../views/LoginSweetAlert/LoginSwat';
// import { App } from '../views/SweetAlert/InputError';

import { InlineMenu } from '../views/Menu/InlineMenu';

const HomePage = () => (
  <Container fluid>
    <InlineMenu />
    <h1><Icon name='home' />Home Page</h1>
    <h2><Link to="/login">Login</Link></h2>
    <h2><Link to="/graphs">Graphs</Link></h2>
    <Header as='h2' position='right'>Charts:</Header>
    <ModalBar />
    <ModalLine />
    <ModalPie />
    <ModalDoughnut />
    <ModalStock />
    <Header as='h2' position='right'>SweetAlerts:</Header>
    <MyAlert /><br /> <br />
  </Container>
);

export default HomePage;
