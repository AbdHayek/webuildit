import React from 'react'

export default function Orbit({ centerId }: { centerId: string }) {
    return (
        <>
            {/* outSide Line */}
            <div className="absolute top-[-5%] right-[10%] left-[10%] 2xl:block xl:block lg:block">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1216 1216"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.5 }}
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
                    />
                </svg>
            </div>

            {/* inSide Line */}
            <div className="absolute top-[18%] right-[17%] left-[17%] 2xl:block xl:block lg:block">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 992 968"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 0.3 }}
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
                        strokeWidth="2"
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
