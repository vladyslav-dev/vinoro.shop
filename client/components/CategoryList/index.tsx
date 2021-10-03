import React from 'react';

const CategoryList = ({ products }) => {
    return (
        <div>
            {products?.map((item, key) => {
                return <div key={key}>{item.name}</div>
            })}
        </div>
    )
}


export default CategoryList;