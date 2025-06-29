import React from 'react'
import { motion } from "framer-motion";
import styles from "./GrowYourBusiness.module.scss"

export default function SmallBubbles({centerId }: {centerId: string }) {
    return (
        <>
            <motion.div
                className={`absolute ${styles.first_smallBub} z-[10] transition-all duration-500 block sm:block md:block lg:block xl:block 2xl:block`}
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[98px] xl:h-[98px]"
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
                className={`absolute ${styles.second_smallBub} z-[10] transition-all duration-500 block sm:block md:block lg:block xl:block 2xl:block`}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[58px] xl:h-[58px]"
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
                className={`absolute ${styles.third_smallBub} z-[10] transition-all duration-500 block sm:block md:block lg:block xl:block 2xl:block`}
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[98px] xl:h-[98px]"
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
                className={`absolute ${styles.forth_smallBub} z-[10] transition-all duration-500 block sm:block md:block lg:block xl:block 2xl:block`}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[58px] xl:h-[58px]"
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
