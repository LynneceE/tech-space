import React from 'react';

export default Categories () {
    return (
        <div>
            {categories.map(item => (
                <CategoryItem/>
            ))}
        </div>
    )
}