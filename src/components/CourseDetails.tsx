import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface Props {
  data: {
    name: string;
    values: {
      title: string;
      description: string;
    }[];
  };
}

const CourseDetails: React.FC<Props> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-lg bg-white shadow-sm">
      <h2 className="mb-4 text-2xl font-semibold">{data.name}</h2>
      <div className="rounded-lg border px-4">
        {data.values.map((item, idx) => (
          <div key={idx}>
            <button
              onClick={() => toggleIndex(idx)}
              className={`flex w-full items-center justify-between py-4 text-left text-base ${idx >= 1 ? "border-t border-dashed" : ""}`}
            >
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
              <RiArrowDownSLine
                className={`float-right text-2xl font-semibold text-gray-500 transition-transform hover:text-black ${
                  openIndex === idx ? "-rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div
                className="mb-4 px-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
