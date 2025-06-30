import React from 'react'

export default function Orbit({ centerId }: { centerId: string }) {
    return (
        <>
            {/* outSide Line */}
            <div className="absolute top-[-15%] 2xl:top-[-5%] xl:top-[-5%] lg:top-[-15%] md:top-[-15%] sm:top-[-15%] right-[5%] left-[5%] sm:right-[8%] sm:left-[8%] md:right-[10%] md:left-[10%] lg:right-[10%] lg:left-[10%] xl:right-[10%] xl:left-[10%] 2xl:right-[10%] 2xl:left-[10%]">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1216 1216"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.5 }}
                    className="w-full h-auto"
                >
                    <circle
                        cx="608"
                        cy="608"
                        r="607.5"
                        stroke={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        strokeWidth="1"
                        className="sm:stroke-[1.5] md:stroke-[2]"
                    />
                </svg>
            </div>

            {/* inSide Line */}
            <div className="absolute top-[2%] sm:top-[2%] md:top-[5%]  lg:top-[5%] xl:top-[18%] right-[15%] left-[15%] sm:right-[18%] sm:left-[18%] md:right-[18%] md:left-[18%] lg:right-[17%] lg:left-[17%] xl:right-[17%] xl:left-[17%] 2xl:right-[17%] 2xl:left-[17%]">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 992 968"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.3 }}
                    className="w-full h-auto"
                >
                    <path
                        d="M496 1C769.404 1 991 217.269 991 484C991 750.731 769.404 967 496 967C222.596 967 1 750.731 1 484C1 217.269 222.596 1 496 1Z"
                        stroke={
                            centerId === `how`
                                ? "#DA59A6"
                                : centerId === `who`
                                    ? "#8448F1"
                                    : "#408BEC"
                        }
                        strokeWidth="1"
                        className="sm:stroke-[1.5] md:stroke-[2]"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_274_1420"
                            x1="991.075"
                            y1="374"
                            x2="-24.9784"
                            y2="376.38"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#8A4EF6" stopOpacity="0.5" />
                            <stop offset="1" stopColor="#AF04FF" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

        </>
    )
}
