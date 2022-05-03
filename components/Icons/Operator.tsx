import React from "react";
import { SvgIconProps } from "@/interfaces/IIcon";
import { COLORS } from '@/constants/colors';

export const MinusSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.66663H16V9.33329H0V6.66663Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)

export const PlusSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6.66667H9.33333V0H6.66667V6.66667H0V9.33333H6.66667V16H9.33333V9.33333H16V6.66667Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)
