import React from 'react';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: black;
`

const Categories = () => {
    return (
        <div>
            {/* {Categories.map(item => (
                <CategoryItem item={item}/>
            ))} */}
            Categories
        </div>
    )
}

export default Categories;