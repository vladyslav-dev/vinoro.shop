import React from "react";

export const SliderDesctopArrowSvg = (props: { isArrowLeft?: boolean }) => (
    <svg style={{ transform: props.isArrowLeft ? "rotate(180deg)" : "0" }} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
            <circle cx="27" cy="27" r="27" fill="white" fillOpacity="0.22" />
            <circle cx="27" cy="27" r="26" stroke="#FDFDFD" strokeWidth="2" />
        </g>
        <path d="M33.2736 26.8041L23.2557 37.0991C23.1733 37.1821 23.1081 37.2806 23.0639 37.3889C23.0197 37.4973 22.9975 37.6133 22.9985 37.7303C22.9994 37.8472 23.0236 37.9629 23.0696 38.0704C23.1155 38.178 23.1823 38.2754 23.2662 38.357C23.35 38.4386 23.4492 38.5027 23.558 38.5457C23.6668 38.5887 23.7831 38.6097 23.9 38.6075C24.017 38.6053 24.1324 38.5799 24.2394 38.5328C24.3465 38.4857 24.4432 38.4178 24.5239 38.3331L35.141 27.4211C35.3017 27.2559 35.3916 27.0345 35.3916 26.8041C35.3916 26.5736 35.3017 26.3523 35.141 26.1871L24.5239 15.2751C24.4432 15.1904 24.3465 15.1225 24.2395 15.0754C24.1324 15.0283 24.017 15.0029 23.9 15.0007C23.7831 14.9984 23.6668 15.0194 23.558 15.0624C23.4492 15.1054 23.35 15.1696 23.2662 15.2511C23.1823 15.3327 23.1155 15.4301 23.0696 15.5377C23.0236 15.6453 22.9994 15.7609 22.9985 15.8779C22.9975 15.9949 23.0197 16.1109 23.0639 16.2192C23.1081 16.3276 23.1733 16.4261 23.2557 16.509L33.2747 26.8041L33.2736 26.8041Z" fill="#FDFDFD" />
        <defs>
            <filter id="filter0_b" x="-15" y="-15" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="7.5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
            </filter>
        </defs>
    </svg>
)

export const SliderMobileArrowSvg = (props: { isArrowLeft?: boolean }) => (
    <svg style={{ transform: props.isArrowLeft ? "rotate(180deg)" : "0" }} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b)">
            <circle cx="17.6418" cy="17.3575" r="17.3571" fill="white" fillOpacity="0.22" />
            <circle cx="17.6418" cy="17.3575" r="16.3571" stroke="white" strokeWidth="2" />
        </g>
        <path d="M21.675 17.2317L15.235 23.8499C15.182 23.9033 15.1401 23.9666 15.1117 24.0362C15.0833 24.1059 15.069 24.1804 15.0696 24.2557C15.0702 24.3309 15.0858 24.4052 15.1153 24.4743C15.1448 24.5435 15.1878 24.6061 15.2417 24.6586C15.2956 24.711 15.3594 24.7523 15.4293 24.7799C15.4993 24.8075 15.574 24.821 15.6492 24.8196C15.7244 24.8182 15.7985 24.8018 15.8674 24.7716C15.9362 24.7413 15.9984 24.6976 16.0502 24.6432L22.8755 17.6283C22.9788 17.5221 23.0366 17.3798 23.0366 17.2317C23.0366 17.0835 22.9788 16.9412 22.8755 16.8351L16.0502 9.82019C15.9984 9.76573 15.9362 9.72209 15.8674 9.69181C15.7985 9.66153 15.7244 9.6452 15.6492 9.64377C15.574 9.64234 15.4993 9.65583 15.4293 9.68347C15.3594 9.71111 15.2956 9.75235 15.2417 9.80479C15.1878 9.85724 15.1448 9.91986 15.1153 9.98902C15.0858 10.0582 15.0702 10.1325 15.0696 10.2077C15.069 10.2829 15.0833 10.3575 15.1117 10.4271C15.1401 10.4968 15.182 10.5601 15.235 10.6134L21.6758 17.2317L21.675 17.2317Z" fill="white" />
        <defs>
            <filter id="filter0_b" x="-14.7153" y="-14.9996" width="64.7143" height="64.7143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="7.5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
            </filter>
        </defs>
    </svg>
)

