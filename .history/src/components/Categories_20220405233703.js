import React from 'react';
import CategoryItem from './CategoryItem';


const Categories = () => {
    return (

            {Categories.map(item => (
                <CategoryItem item={item}/>
            ))}

    )
}

export default Categories;