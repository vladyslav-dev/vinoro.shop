import React, { useEffect, useState } from 'react';
import styles from './search.module.scss';
import { useRouter } from 'next/router';
import Catalog from '@/components/Catalog';
import EmptyCatalog from '@/components/EmptyCatalog';
import { getProductsByQuery } from '@/utils/api';



interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {

    const [products, setProducts] = useState(null)
    const router = useRouter();

    const { query } = router.query;

    useEffect(() => {
        getProductsByQuery(query as string)
            .then(res => setProducts(res.data.products))
            .catch(err => console.error(err))
    }, [query])

    return (
        <div className={styles.search}>
            <div className={styles["container-xl"]}>
                {products && (
                    <Catalog 
                        products={products}
                        alt={(
                            <EmptyCatalog
                                textWarnings={`По запросу ${query} ничего не найдено!`}
                            />
                        )}
                    />
                )}
            </div>
        </div>
    )
}

export default Search