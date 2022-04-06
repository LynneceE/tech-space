import React from 'react';
import categoryItem from './CategoryItem';


const Categories = () => {
    return (
        <div>
            {Categories.map(item => (
                <categoryItem item={item}/>
            ))}
        </div>
    )
}

export default Categories;