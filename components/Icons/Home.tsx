import React from "react";
import { SvgIconProps } from "@/interfaces/icon";
import { COLORS } from '@/constants/colors';

export const HomeSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.0454 32.3599H26.2403C28.1122 32.3599 29.6258 30.8463 29.6258 28.9744V19.4157C29.6258 18.3006 29.0682 17.2251 28.1123 16.5878L20.1468 11.2907C18.9919 10.5339 17.5181 10.5339 16.4029 11.2907L8.43735 16.5878C7.48141 17.2251 6.92383 18.2606 6.92383 19.4157V28.9744C6.92383 30.8463 8.43735 32.3599 10.3093 32.3599H11.5042C13.3761 32.3599 14.8897 30.8463 14.8897 28.9744V24.9916C14.8897 23.1197 16.4032 21.6061 18.2752 21.6061C20.1472 21.6061 21.6607 23.1196 21.6607 24.9916V28.9744C21.6604 30.8463 23.1737 32.3599 25.0456 32.3599H25.0454Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M25.2447 7.34816C26.0812 7.98546 27.2361 7.38788 27.2361 6.35246V4.91867C27.2361 4.24163 26.6785 3.68408 26.0015 3.68408H25.3244C24.6474 3.68408 24.0898 4.24166 24.0898 4.91867V5.83463C24.0898 6.23302 24.289 6.59143 24.6077 6.83033L25.2447 7.34816Z" fill={color || COLORS.COLOR_COD_GRAY}/>
        <path d="M19.1516 3.88328C18.6738 3.56462 17.9567 3.56462 17.4789 3.88328L3.77814 15.6324C2.86218 16.5087 3.37975 18.0222 4.61467 18.0222C4.8936 18.0222 5.13251 17.9425 5.33142 17.7833L17.5187 8.86192C17.9568 8.54327 18.5541 8.54327 18.9922 8.86192L30.7414 17.385C30.9406 17.5442 31.2193 17.624 31.4982 17.624C32.6931 17.624 33.2507 16.1104 32.3347 15.2342L19.1516 3.88328Z" fill={color || COLORS.COLOR_COD_GRAY}/>
    </svg>
)

export const BreadcrumbHomeSvg: React.FC<SvgIconProps> = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9298 11.3035L11.6798 2.1368C11.3324 1.74997 10.665 1.74997 10.3176 2.1368L2.0676 11.3035C1.94885 11.4351 1.87091 11.5984 1.84324 11.7735C1.81557 11.9486 1.83938 12.128 1.91177 12.2898C2.05843 12.6207 2.3866 12.8334 2.74868 12.8334H4.58202V19.2501C4.58202 19.4932 4.67859 19.7263 4.8505 19.8982C5.02241 20.0701 5.25557 20.1667 5.49868 20.1667H8.24868C8.4918 20.1667 8.72496 20.0701 8.89686 19.8982C9.06877 19.7263 9.16535 19.4932 9.16535 19.2501V15.5834H12.832V19.2501C12.832 19.4932 12.9286 19.7263 13.1005 19.8982C13.2724 20.0701 13.5056 20.1667 13.7487 20.1667H16.4987C16.7418 20.1667 16.975 20.0701 17.1469 19.8982C17.3188 19.7263 17.4154 19.4932 17.4154 19.2501V12.8334H19.2487C19.4262 12.8341 19.6001 12.7832 19.7492 12.6869C19.8983 12.5905 20.0161 12.4528 20.0883 12.2906C20.1605 12.1284 20.184 11.9488 20.1558 11.7735C20.1277 11.5982 20.0491 11.4349 19.9298 11.3035V11.3035Z" fill={color || COLORS.COLOR_COD_GRAY} />
    </svg>
)
