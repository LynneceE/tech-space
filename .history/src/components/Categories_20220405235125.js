import React from 'react';
import CategoryItem from './CategoryItem';


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