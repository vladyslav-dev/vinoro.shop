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

    const onLoadCallBack = (e) => {
        setIsImageReady(true)
    }

    return (
        <div className={styles.imageContainer}>
            <div className={isImageReady ? styles.imageSkeletonHide : styles.imageSkeleton}></div>
            <div className={`${styles.imageWrapper} ${isImageReady ? styles.imageShow : styles.imageHide}`}>

                <Image
                    onLoadingComplete={onLoadCallBack}
                    src={src}
                    layout="fill"
                    className={styles.image}
                    quality={quality}
                    alt={alt}
                    priority
                />
            </div>

        </div >
    )
}

export default Img
