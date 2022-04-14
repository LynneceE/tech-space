import React from 'react';
import Navbar from './Navbar';

import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: orange;
    text-color: red
`


const Header = () => {
    return (
        <Container>
            <Navbar></Navbar>
        </Container>
    )
}

export default Header;