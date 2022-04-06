import React from 'react';
import categoryI

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