import React from "react";
import { SvgIconProps } from "@/interfaces/IIcon";
import { COLORS } from '@/constants/colors';

export const OrderUserSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_301_3490)">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C6.917 0 3.535 4.949 8.267 13.678C9.863 16.623 6.542 17.319 3.177 18.096C0.104001 18.805 -0.00999963 20.331 3.73751e-07 23L0.00400037 24H23.994L23.998 23.031C24.01 20.343 23.905 18.808 20.821 18.096C17.383 17.302 14.182 16.606 15.731 13.678C20.45 4.766 16.982 0 12 0ZM12 1C13.89 1 15.39 1.764 16.225 3.15C17.579 5.401 17.091 8.974 14.848 13.21C14.271 14.302 14.175 15.288 14.565 16.142C15.502 18.191 19.323 18.774 20.597 19.07C22.9 19.604 23.009 20.383 22.998 23H1C0.99 20.385 1.09 19.604 3.401 19.07C4.558 18.804 8.539 18.151 9.45 16.13C9.837 15.272 9.734 14.287 9.146 13.201C6.915 9.086 6.402 5.437 7.741 3.189C8.581 1.777 10.094 1 12 1Z" fill={color || COLORS.COLOR_COD_GRAY} />
        </g>
        <defs>
            <clipPath id="clip0_301_3490">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
