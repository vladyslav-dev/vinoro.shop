import React from 'react';
import styles from './EmptyCatalog.module.scss';
import Link from 'next/link';

interface EmptyCatalogProps {
    buttonLink?: {
        path: string;
        text: string;
    }
    textWarnings: string
}

const EmptyCatalog: React.FC<EmptyCatalogProps> = ({ buttonLink, textWarnings }) => {
    return (
        <div className={styles.emptyList}>
            <p>{textWarnings}</p>
            {buttonLink && (
                <Link href={buttonLink.path}>
                    <a className={styles.emptyListButton}>{buttonLink.text}</a>
                </Link>
            )}
        </div>
    )
}

export default EmptyCatalog;