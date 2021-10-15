import Image from 'next/image'
import React from 'react'
import styles from './Img.module.scss'


interface ImgProps {
    src: string,
    quality?: number,
    alt?: string,
}

const Img: React.FC<ImgProps> = (
    {
        src,
        quality = 100,
        alt = "Изображение не найдено",
    }
) => {
    return (
        <div className={styles.imageContainer}>
            <Image
                src={src}
                layout="fill"
                className={styles.image}
                quality={quality}
                alt={alt}
            />
        </div>
    )
}

export default Img
