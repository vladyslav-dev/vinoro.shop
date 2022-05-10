import useLightElements from "@/hooks/useLightElements";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {

    const { isLight } = useLightElements();

    return (
        <h1 className={`${styles.logo} ${isLight ? styles.light : ''}`}>VINORO</h1>
    )
}

export default React.memo(Logo);