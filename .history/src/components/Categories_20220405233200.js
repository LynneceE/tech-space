import React from 'react';
import categoryItem from 

const Container = div`
display: flex;
`;

export default Categories () {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </Container>
    )
}