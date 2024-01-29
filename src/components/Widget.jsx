import React from "react";
import greenarrow from "../assets/greenarrow.png";
import brownarrow from "../assets/brownarrow.png";
import AnimatedProgressBar from "./AnimatedProgressBar";

const Widget = ({
  delay,
  children,
  title,
  value,
  subTitle,
  greenArrow,
  clickableLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 p-6 bg-white shadow-xl rounded-2xl">
      <div className={`w-full flex ${children? 'justify-center': 'justify-start pb-4'} text-xl font-semibold text-[#131313]`}>
        {title}
      </div>
      {children ? (
        <div>
          {children}
        </div>
      ) : (
        <>
          <div className="flex items-baseline gap-2">
            <AnimatedProgressBar targetProgress={value} delay={delay}/>
            {greenArrow && <img src={greenarrow} alt="link" />}
          </div>
          <div className="font-normal text-sm text-[#454545]">{subTitle}</div>
        </>
      )}
      <span className={`flex ${children? 'justify-center': 'justify-start pt-10'} items-end gap-2`}>
        <span className="text-sm font-normal text-[#734A00]">
          {clickableLink}
        </span>
        <img className="w-4" src={brownarrow} alt="link" />
      </span>
    </div>
  );
};

export default Widget;
