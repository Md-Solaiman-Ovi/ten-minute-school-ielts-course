import React from "react";
import FiveStar from "../assets/five-star.jpeg";
interface TopHeaderProps {
  title: string;
  description: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-[url(./assets/header-bg-img.jpeg)] bg-cover bg-center py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-3 text-4xl font-semibold">{title}</h1>
        <p className="mb-2 flex items-center whitespace-nowrap text-lg font-semibold text-yellow-400">
          <img
            src={FiveStar}
            alt="10 Minute School"
            className="h-auto w-[100px] md:max-w-[130px]"
          />
          <span className="ml-2 text-base font-normal text-white">
            (82.6% শিক্ষার্থী এই কোর্স শেষ করে ৫ রেটিং দিয়েছেন)
          </span>
        </p>
        <div className="max-w-3xl text-base font-normal text-white/70">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
