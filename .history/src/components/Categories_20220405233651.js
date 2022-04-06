import React from 'react';
import CategoryItem from './CategoryItem';

const Container = this.props.container;

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