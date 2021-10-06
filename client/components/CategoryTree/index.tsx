import React, { useState } from 'react'
import { ICategory } from '@/interfaces/ICategory'
import { Catalog } from '../../enums/Catalog'

interface CategoryTreeProps {
    category? : Array<ICategory>
}

const CategoryTree = (props : CategoryTreeProps) => {
    const { category } = props
    const [hideTree, setHideTree] = useState(false)
    console.log(category, Catalog[category[0].catalog])
    return (
        <div>
            Test
        </div>
    )
}

export default CategoryTree

