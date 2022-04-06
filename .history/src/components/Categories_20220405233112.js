import React from 'react';

const Container = div

export default Categories () {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </Container>
    )
}