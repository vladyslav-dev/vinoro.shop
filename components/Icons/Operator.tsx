import React from "react";
import { SvgIconProps } from "@/interfaces/icon";
import { COLORS } from '@/constants/colors';

export const MinusSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6776 38.739H86.8022C93.011 38.739 98.0442 44.9152 98.0442 49.9223C98.0442 56.0985 93.011 61.1055 86.8022 61.1055H12.6776C6.46882 61.1055 1.43555 54.9293 1.43555 49.9223C1.43555 43.7461 6.46882 38.739 12.6776 38.739V38.739Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)

export const PlusSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="99" height="100" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.6776 39.1304H86.8022C93.011 39.1304 98.0442 45.369 98.0442 50.4266C98.0442 56.6652 93.011 61.7228 86.8022 61.7228H12.6776C6.46882 61.7228 1.43555 55.4842 1.43555 50.4266C1.43555 44.188 6.46882 39.1304 12.6776 39.1304V39.1304Z" fill={color || COLORS.COLOR_COD_GRAY} />
        <path fillRule="evenodd" clipRule="evenodd" d="M60.9238 12.9899L60.9238 87.8632C60.9238 94.1347 54.7476 99.2188 49.7406 99.2188C43.5644 99.2188 38.5573 94.1347 38.5573 87.8632L38.5573 12.9899C38.5573 6.71839 44.7335 1.63428 49.7406 1.63428C55.9168 1.63428 60.9238 6.71839 60.9238 12.9899V12.9899Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)
