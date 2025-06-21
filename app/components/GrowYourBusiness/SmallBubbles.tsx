import React from 'react'
import { motion } from "framer-motion";
import styles from "./GrowYourBusiness.module.scss"

export default function SmallBubbles({ positionsBubble, centerId }: { positionsBubble: any, centerId: string }) {
    return (
        <>
            <motion.div
                className={`absolute ${styles.first_smallBub}  z-[10] transition-all duration-500 hidden 2xl:block xl:block lg:block`}
            >
                <svg
                    width="98"
                    height="98"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="48.7963"
                        cy="48.7962"
                        r="39.8421"
                        transform="rotate(165 48.7963 48.7962)"
                        fill={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        fillOpacity="0.25"
                    />
                    <g filter="url(#filter0_f_274_1429)">
                        <circle
                            cx="48.7966"
                            cy="48.7964"
                            r="26.5614"
                            transform="rotate(165 48.7966 48.7964)"
                            fill={
                                centerId === `how`
                                    ? "#DA59A6"
                                    : centerId === `who`
                                        ? "#8448F1"
                                        : "#408BEC"
                            }
                            fillOpacity="0.76"
                        />
                    </g>
                    <g
                        style={{ mixBlendMode: "plus-lighter" }}
                        filter="url(#filter1_f_274_1429)"
                    >
                        <circle
                            cx="50.1515"
                            cy="49.579"
                            r="9.05877"
                            transform="rotate(165 50.1515 49.579)"
                            fill="white"
                            fillOpacity="0.76"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_274_1429"
                            x="19.2286"
                            y="19.2284"
                            width="59.136"
                            height="59.136"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="1.5"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                        <filter
                            id="filter1_f_274_1429"
                            x="39.2906"
                            y="38.7179"
                            width="21.7219"
                            height="21.7221"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="0.9"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
            <motion.div
                className={`absolute ${styles.second_smallBub} z-[10] transition-all duration-500 hidden 2xl:block xl:block lg:block`}
            >
                <svg
                    width="58"
                    height="58"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="48.7963"
                        cy="48.7962"
                        r="39.8421"
                        transform="rotate(165 48.7963 48.7962)"
                        fill={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        fillOpacity="0.25"
                    />
                    <g filter="url(#filter0_f_274_1429)">
                        <circle
                            cx="48.7966"
                            cy="48.7964"
                            r="26.5614"
                            transform="rotate(165 48.7966 48.7964)"
                            fill={
                                centerId === `how`
                                    ? "#DA59A6"
                                    : centerId === `who`
                                        ? "#8448F1"
                                        : "#408BEC"
                            }
                            fillOpacity="0.76"
                        />
                    </g>
                    <g
                        style={{ mixBlendMode: "plus-lighter" }}
                        filter="url(#filter1_f_274_1429)"
                    >
                        <circle
                            cx="50.1515"
                            cy="49.579"
                            r="9.05877"
                            transform="rotate(165 50.1515 49.579)"
                            fill="white"
                            fillOpacity="0.76"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_274_1429"
                            x="19.2286"
                            y="19.2284"
                            width="59.136"
                            height="59.136"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="1.5"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                        <filter
                            id="filter1_f_274_1429"
                            x="39.2906"
                            y="38.7179"
                            width="21.7219"
                            height="21.7221"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="0.9"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
            <motion.div
                className={`absolute ${styles.third_smallBub} z-[10] transition-all duration-500 hidden 2xl:block xl:block lg:block`}
            >
                <svg
                    width="98"
                    height="98"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="48.7963"
                        cy="48.7962"
                        r="39.8421"
                        transform="rotate(165 48.7963 48.7962)"
                        fill={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        fillOpacity="0.25"
                    />
                    <g filter="url(#filter0_f_274_1429)">
                        <circle
                            cx="48.7966"
                            cy="48.7964"
                            r="26.5614"
                            transform="rotate(165 48.7966 48.7964)"
                            fill={
                                centerId === `how`
                                    ? "#DA59A6"
                                    : centerId === `who`
                                        ? "#8448F1"
                                        : "#408BEC"
                            }
                            fillOpacity="0.76"
                        />
                    </g>
                    <g
                        style={{ mixBlendMode: "plus-lighter" }}
                        filter="url(#filter1_f_274_1429)"
                    >
                        <circle
                            cx="50.1515"
                            cy="49.579"
                            r="9.05877"
                            transform="rotate(165 50.1515 49.579)"
                            fill="white"
                            fillOpacity="0.76"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_274_1429"
                            x="19.2286"
                            y="19.2284"
                            width="59.136"
                            height="59.136"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="1.5"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                        <filter
                            id="filter1_f_274_1429"
                            x="39.2906"
                            y="38.7179"
                            width="21.7219"
                            height="21.7221"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="0.9"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
            <motion.div
                className={`absolute ${styles.forth_smallBub}  z-[10] transition-all duration-500 hidden 2xl:block xl:block lg:block`}
            >
                <svg
                    width="58"
                    height="58"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="48.7963"
                        cy="48.7962"
                        r="39.8421"
                        transform="rotate(165 48.7963 48.7962)"
                        fill={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        fillOpacity="0.25"
                    />
                    <g filter="url(#filter0_f_274_1429)">
                        <circle
                            cx="48.7966"
                            cy="48.7964"
                            r="26.5614"
                            transform="rotate(165 48.7966 48.7964)"
                            fill={
                                centerId === `how`
                                    ? "#DA59A6"
                                    : centerId === `who`
                                        ? "#8448F1"
                                        : "#408BEC"
                            }
                            fillOpacity="0.76"
                        />
                    </g>
                    <g
                        style={{ mixBlendMode: "plus-lighter" }}
                        filter="url(#filter1_f_274_1429)"
                    >
                        <circle
                            cx="50.1515"
                            cy="49.579"
                            r="9.05877"
                            transform="rotate(165 50.1515 49.579)"
                            fill="white"
                            fillOpacity="0.76"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_274_1429"
                            x="19.2286"
                            y="19.2284"
                            width="59.136"
                            height="59.136"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="1.5"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                        <filter
                            id="filter1_f_274_1429"
                            x="39.2906"
                            y="38.7179"
                            width="21.7219"
                            height="21.7221"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="0.9"
                                result="effect1_foregroundBlur_274_1429"
                            />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
            {/* end small bubbles */}
        </>
    )
}
