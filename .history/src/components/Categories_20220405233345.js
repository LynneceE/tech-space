import React from 'react';
import CategoryItem from './CategoryItem';

const Container = div`
display: flex;
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </Container>
    )
}

export default Categories;