import React from 'react';
import CategoryItem from './CategoryItem';
import { categories } from ""
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
`

const Categories = () => {
    return (
        <Container>
            {/* {Categories.map(item => (
                <CategoryItem item={item}/>
            ))} */}
            Categories
        </Container>
    )
}

export default Categories;