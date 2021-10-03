import React from 'react';
import moduleStyles from './Button.module.scss';

type ButtonType = "default" | "outlined" | "disabled";
type ButtonSize = "desktop" | "mobile";

export interface ButtonProps {
    label?: string;
    click?: () => void;
    type?: ButtonType;
    size?: ButtonSize;
    icon?: React.ReactNode;
    styles?: React.CSSProperties;
};

const Button = (props: ButtonProps) => {
    const {
        label = "Default text",
        click,
        type = "default",
        icon,
        styles,
    } = props;

    return (
        <button
            className={moduleStyles.button}
            onClick={click}
            type="button"
            style={styles}
        >
            <span className={moduleStyles.buttonChildren}>{label}</span>
            {icon && <span className={moduleStyles.buttonIcon}>{icon}</span>}
        </button>
    )
}

export default Button;