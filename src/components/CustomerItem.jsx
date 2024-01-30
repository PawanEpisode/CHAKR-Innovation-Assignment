import React from "react";
import comment from "../assets/comment.png";
import star from "../assets/star.png";
import edit from "../assets/edit.png";
import line from "../assets/line.png";
import threedot from "../assets/threedot.png";
import CustomText from "./CustomText";

const CustomerItem = ({ profilePic, customerName, customerCompanyName }) => {
  return (
    <div className="w-full flex p-4 gap-3 items-center hover:bg-[#FFF7E8] rounded-2xl">
      <div className="flex justify-center items-center w-8 h-8">
        <img src={profilePic} alt="customer-pic" />
      </div>
      <div className="flex items-start flex-1 justify-center gap-1 flex-col">
        <CustomText className="text-sm text-[#131313] font-medium" title={customerName}/>
        <CustomText className="text-xs text-[#454545] font-normal" title={customerCompanyName}/>
      </div>
      <div className="flex items-center gap-3">
        {[comment, star, edit].map((item, index) => (
          <div
            key={index}
            className="flex w-9 h-9 p-2 justify-center items-center gap-2"
          >
            <button className="cursor-pointer">
              <img src={item} alt="comment-button" />
            </button>
          </div>
        ))}
        <img className="mx-3" src={line} alt="line" />
        <div className="flex w-9 h-9 p-2 justify-center items-center gap-2">
          <button className="cursor-pointer">
            <img src={threedot} alt="threedot-button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;