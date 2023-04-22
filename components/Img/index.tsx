/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import styles from './Img.module.scss'

interface ImgProps {
    src: string;
    errorSrc?: string;
    quality?: number;
    alt?: string;
}

const Img: React.FC<ImgProps> = (
    {
        src,
        quality = 75,
        alt = "Image not found",
        errorSrc = 'https://res.cloudinary.com/vinoro-media-storage/image/upload/v1626027250/vinoro/empty_xjuljc.jpg',
    }
) => {
    const [isImageReady, setIsImageReady] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    return (
        <div className={styles.imageContainer}>
            <div className={`${styles.imageSkeleton} ${isImageReady ? styles.imageReady : null}`} />
            <div className={`${styles.imageWrapper} ${isImageReady ? styles.imageReady : null}`}>
                {/* {src && (
                    <Image
                        onLoadingComplete={() => setIsImageReady(true)}
                        onError={() => setIsError(true)}
                        src={isError ? errorSrc : src}
                        layout="fill"
                        lazyBoundary="500px"
                        priority={true}
                        className={`${styles.image}`}
                        quality={quality}
                        alt={alt}
                    />
                )} */}
                
                {src && (
                    <span>
                        <img 
                            alt={alt}
                            src={isError ? errorSrc : src} 
                            onLoad={() => setIsImageReady(true)}
                            onError={() => setIsError(true)}
                            className={`${styles.image}`}
                        />
                    </span>
                )}
           
            </div>
        </div >
    )
}

export default Img
