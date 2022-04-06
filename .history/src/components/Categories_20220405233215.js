import React from 'react';
import categoryItem from './CategoryItem';

const Container = div`
display: flex;
`;

export default Categories () {
    return (
        <Container>
            {categories.map(item => (
                <categoryItem item={item}/>
            ))}
        </Container>
    )
}