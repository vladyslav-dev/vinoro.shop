import React from "react";
import { SvgIconProps } from "@/interfaces/IIcon";
import { COLORS } from '@/constants/colors';

export const ExitSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 17.5V14H12.25V10.5H21V7L26.25 12.25L21 17.5ZM19.25 15.75V22.75H10.5V28L0 22.75V0H19.25V8.75H17.5V1.75H3.5L10.5 5.25V21H17.5V15.75H19.25Z" fill={color || COLORS.COLOR_COD_GRAY}/>
    </svg>
)