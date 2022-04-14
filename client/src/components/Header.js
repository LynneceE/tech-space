import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
`

const Title = styled.h1`
font-family: Helvetica, sans-serif`

const Header = () => {
    return (
        <Container>
            <Title>Tech Space</Title>
        </Container>
    )
}

export default Header;