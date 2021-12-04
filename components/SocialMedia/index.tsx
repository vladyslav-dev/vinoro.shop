import React from 'react';
import Link from 'next/link'
import styles from './SocialMedia.module.scss'
import { FacebookSvg, InstSvg, ViberSvg } from '@/icons/SocialMedia';

const SocialMedia = () => {

    return (
        <div className={styles.socialMedia}>
            <Link href={process.env.FACEBOOK_LINK || "/"} >
                <a target="_blank">
                    <FacebookSvg />
                </a>
            </Link>
            <Link href={process.env.INSTAGRAM_LINK || "/"} >
                <a target="_blank">
                    <InstSvg />
                </a>
            </Link>
            <Link href={process.env.VIBER_LINK || "/"} >
                <a target="_blank">
                    <ViberSvg />
                </a>
            </Link>
        </div>
    )
}

export default SocialMedia