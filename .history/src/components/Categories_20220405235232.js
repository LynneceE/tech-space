import React from 'react';
import categoryItem from './CategoryItem';


const Categories = () => {
    return (
        <div>
            {Categories.map(item => (
                <CategoryItem item={item}/>
            ))}
        </div>
    )
}

export default Categories;