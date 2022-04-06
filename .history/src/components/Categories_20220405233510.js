import React from 'react';
import CategoryItem from './CategoryItem';

const Container = `
display: flex;
`;

const Categories = () => {
    return (
        <Container>
            {Categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </Container>
    )
}

export default Categories;