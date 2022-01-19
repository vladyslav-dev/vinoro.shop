import Image from 'next/image'
import React from 'react'
import styles from './Img.module.scss'

interface ImgProps {
    src: string;
    quality?: number;
    alt?: string;
}

const Img: React.FC<ImgProps> = (
    {
        src,
        quality = 100,
        alt = "Изображение не найдено",
    }
) => {

    const [isImageReady, setIsImageReady] = React.useState(false);

    console.log(isImageReady)

    return (
        <div className={styles.imageContainer}>
            <div className={`${styles.imageSkeleton}`} />
            <div className={`${styles.imageWrapper} ${isImageReady ? styles.imageReady : null}`}>
                {src && (
                    <Image
                        onLoadingComplete={() => setIsImageReady(true)}
                        src={src}
                        layout="fill"
                        lazyBoundary="500px"
                        className={`${styles.image}`}
                        quality={quality}
                        alt={alt}
                    />
                )}
                
            </div>

        </div >
    )
}

export default Img
