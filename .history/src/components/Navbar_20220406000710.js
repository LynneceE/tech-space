import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>left</Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;