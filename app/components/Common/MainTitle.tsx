import React from "react";

interface MainTitleProps {
  children: React.ReactNode;
  className?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ children, className = "" }) => (
  <h2
    className={`text-center text-[32px] md:text-[40px] lg:text-[48px] font-medium ${className}`}
  >
    {children}
  </h2>
);

export default MainTitle;
