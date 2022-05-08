import React from 'react';
import { SvgIconProps } from "@/interfaces/icon";
import { COLORS } from '@/constants/colors';

export const ScrollMouseSvg: React.FC<SvgIconProps> = ({ color }) => (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0007 6.6665L16.7073 5.95984C16.5198 5.77257 16.2657 5.66738 16.0007 5.66738C15.7356 5.66738 15.4815 5.77257 15.294 5.95984L16.0007 6.6665ZM16.0007 17.3332L15.294 18.0398C15.4815 18.2271 15.7356 18.3323 16.0007 18.3323C16.2657 18.3323 16.5198 18.2271 16.7073 18.0398L16.0007 17.3332ZM12.6273 8.6265C12.4507 8.81607 12.3545 9.0668 12.3591 9.32587C12.3637 9.58494 12.4686 9.83212 12.6518 10.0153C12.835 10.1986 13.0822 10.3035 13.3413 10.3081C13.6004 10.3126 13.8511 10.2165 14.0407 10.0398L12.6273 8.6265ZM17.9607 10.0398C18.0522 10.1381 18.1626 10.2169 18.2853 10.2715C18.4079 10.3262 18.5404 10.3556 18.6746 10.358C18.8089 10.3603 18.9423 10.3356 19.0668 10.2853C19.1913 10.235 19.3044 10.1602 19.3994 10.0652C19.4943 9.97026 19.5692 9.85715 19.6195 9.73264C19.6698 9.60812 19.6945 9.47475 19.6921 9.34047C19.6897 9.2062 19.6603 9.07379 19.6057 8.95112C19.551 8.82845 19.4722 8.71805 19.374 8.6265L17.9607 10.0398ZM14.0407 13.9598C13.9491 13.8616 13.8387 13.7828 13.716 13.7281C13.5934 13.6735 13.461 13.6441 13.3267 13.6417C13.1924 13.6393 13.059 13.664 12.9345 13.7143C12.81 13.7646 12.6969 13.8395 12.6019 13.9345C12.507 14.0294 12.4321 14.1425 12.3818 14.267C12.3315 14.3916 12.3068 14.5249 12.3092 14.6592C12.3116 14.7935 12.341 14.9259 12.3956 15.0486C12.4503 15.1712 12.5291 15.2816 12.6273 15.3732L14.0407 13.9598ZM19.374 15.3732C19.4722 15.2816 19.551 15.1712 19.6057 15.0486C19.6603 14.9259 19.6897 14.7935 19.6921 14.6592C19.6945 14.5249 19.6698 14.3916 19.6195 14.267C19.5692 14.1425 19.4943 14.0294 19.3994 13.9345C19.3044 13.8395 19.1913 13.7646 19.0668 13.7143C18.9423 13.664 18.8089 13.6393 18.6746 13.6417C18.5404 13.6441 18.4079 13.6735 18.2853 13.7281C18.1626 13.7828 18.0522 13.8616 17.9607 13.9598L19.374 15.3732ZM4.33398 13.3332V18.6665H6.33398V13.3332H4.33398ZM27.6673 18.6665V13.3332H25.6673V18.6665H27.6673ZM15.0007 6.6665V17.3332H17.0007V6.6665H15.0007ZM15.294 5.95984L12.6273 8.6265L14.0407 10.0398L16.7073 7.37317L15.294 5.95984V5.95984ZM15.294 7.37317L17.9607 10.0398L19.374 8.6265L16.7073 5.95984L15.294 7.37317ZM16.7073 16.6265L14.0407 13.9598L12.6273 15.3732L15.294 18.0398L16.7073 16.6265ZM16.7073 18.0398L19.374 15.3732L17.9607 13.9598L15.294 16.6265L16.7073 18.0398ZM27.6673 13.3332C27.6673 10.239 26.4382 7.27152 24.2502 5.08359C22.0623 2.89567 19.0948 1.6665 16.0007 1.6665V3.6665C18.5644 3.6665 21.0232 4.68495 22.836 6.49781C24.6489 8.31066 25.6673 10.7694 25.6673 13.3332H27.6673ZM16.0007 30.3332C17.5327 30.3332 19.0498 30.0314 20.4653 29.4451C21.8808 28.8588 23.1669 27.9994 24.2502 26.9161C25.3336 25.8327 26.1929 24.5466 26.7792 23.1311C27.3655 21.7157 27.6673 20.1986 27.6673 18.6665H25.6673C25.6673 21.2303 24.6489 23.689 22.836 25.5019C21.0232 27.3147 18.5644 28.3332 16.0007 28.3332V30.3332ZM4.33398 18.6665C4.33398 21.7607 5.56315 24.7282 7.75107 26.9161C9.939 29.104 12.9065 30.3332 16.0007 30.3332V28.3332C13.4369 28.3332 10.9781 27.3147 9.16529 25.5019C7.35243 23.689 6.33398 21.2303 6.33398 18.6665H4.33398ZM6.33398 13.3332C6.33398 10.7694 7.35243 8.31066 9.16529 6.49781C10.9781 4.68495 13.4369 3.6665 16.0007 3.6665V1.6665C12.9065 1.6665 9.939 2.89567 7.75107 5.08359C5.56315 7.27152 4.33398 10.239 4.33398 13.3332H6.33398Z" fill={color || COLORS.COLOR_COD_GRAY}/>
</svg>
)