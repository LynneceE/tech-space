import React from 'react';
import CategoryItem from './CategoryItem';

const Container = div`
display: flex;
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <categoryItem item={item}/>
            ))}
        </Container>
    )
}

export default Categories;