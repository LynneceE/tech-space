import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1
`
const Center = styled.div`
    flex: 1
`
const Right = styled.div`
    flex: 1
`

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    left
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}

export default Header;