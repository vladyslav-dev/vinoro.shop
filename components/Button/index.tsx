import React from 'react';
import moduleStyles from './Button.module.scss';

type ButtonType = "default" | "outlined" | "disabled" | "without";
type ButtonSize = "desktop" | "mobile";

export interface ButtonProps {
    label?: string;
    click?: (e: React.MouseEvent) => void;
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

    let backgroudStyle = "#232021" // default background
    let borderStyle = "none" // default border
    let colorStyle = "#FFFFFF" // default color
    let eventStyle = "auto"

    if (type === "outlined") {
        backgroudStyle = "#FFFFFF"
        borderStyle = "2px solid #232021"
        colorStyle = "#232021"
    }
    if (type === "disabled") {
        backgroudStyle = "#BBBBBB"
        borderStyle = "2px solid #BBBBBB"
        eventStyle = "none"
    }
    if (type === "without") {
        backgroudStyle = "none"
        borderStyle = "none"
        eventStyle = "none"
        colorStyle = "#232021"
    }

    const initialStyles = {
        background: backgroudStyle,
        border: borderStyle,
        color: colorStyle,
        cursor: type === "disabled" ? "default" : "pointer",
        ...styles,
        //   ["pointer-events"]: eventStyle // make sure that it's work correctly
    }

    return (
        <button
            className={moduleStyles.button}
            onClick={click}
            type="button"
            disabled={type === "disabled"}
            style={initialStyles}
        >
            <span className={moduleStyles.buttonChildren}>{label}</span>
            {icon && <span className={moduleStyles.buttonIcon}>{icon}</span>}
        </button>
    )
}

export default Button;