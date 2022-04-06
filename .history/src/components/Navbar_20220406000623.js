import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left></Left>
        </Container>
    )
}

export default Navbar;