import React from 'react';
import CategoryItem from './CategoryItem';

const Container = this;

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