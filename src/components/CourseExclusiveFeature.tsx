// import React from "react";
// import Img1 from "../assets/ielts_mock_sqr.jpeg";
// import Img2 from "../assets/ielts_mock_book_sqr.jpeg";

// const CourseExclusiveFeature: React.FC = () => {
//   return (
//     <div className="mt-8 w-full">
//       <h2 className="mb-4 text-2xl font-semibold">Course Exclusive Feature</h2>

//       {/* Video Lectures Card */}
//       <div className="mb-4 flex flex-col items-start gap-4 rounded-lg border p-4 text-[rgba(75,85,99,1)] md:flex-row">
//         <div className="flex-1 space-y-2">
//           <h3 className="text-black">ভিডিও লেকচার</h3>
//           <ul className="space-y-1 text-gray-700">
//             <li>✔ IELTS Academic ও General Training নিয়ে আলোচনা</li>
//             <li>
//               ✔ Reading, Writing, Listening ও Speaking এর Overview & Format
//             </li>
//             <li>✔ প্রতিটি প্রশ্নের ধরনের ভিত্তিক উত্তর করার স্ট্রাটেজি</li>
//             <li>✔ ভিডিওর সাথে প্র্যাকটিসের সুযোগ</li>
//           </ul>
//         </div>
//         <img
//           src={Img1}
//           alt="50+ Video Lectures"
//           className="size-40 rounded md:size-60"
//         />
//       </div>

//       {/* Mock Tests Card */}
//       <div className="flex flex-col items-start gap-4 rounded-lg border p-4 md:flex-row">
//         <div className="flex-1 space-y-2">
//           <h3 className="text-black">Reading ও Listening Mock Tests</h3>
//           <ul className="space-y-1 text-gray-700">
//             <li>✔ 10 Reading & 10 Listening Mock Tests</li>
//             <li>✔ Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</li>
//             <li>✔ উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</li>
//             <li>✔ যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</li>
//           </ul>
//         </div>
//         <img
//           src={Img2}
//           alt="Mock Tests"
//           className="size-40 rounded md:size-60"
//         />
//       </div>
//     </div>
//   );
// };

// export default CourseExclusiveFeature;

import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
interface Props {
  data: {
    name: string;
    values: {
      title: string;
      file_url: string;
      checklist: string[];
    }[];
  };
}

const CourseExclusiveFeature: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-8 w-full">
      <h2 className="mb-4 text-2xl font-semibold">{data.name}</h2>
      <div className="rounded-lg border px-5">
        {" "}
        {data.values.map((item, index) => (
          <div
            key={item.title}
            className={`mb-4 flex flex-col items-start gap-4 py-5 text-gray-700 md:flex-row ${index >= 1 ? "border-t" : ""}`}
          >
            <div className="flex-1 space-y-2">
              <h3 className="text-black">{item.title}</h3>
              <ul className="space-y-2">
                {item.checklist.map((point, idx) => (
                  // <li key={idx}>✔ {point}</li>
                  <li key={idx} className="flex items-start gap-4">
                    <IoCheckmarkSharp className="mt-1 size-5 flex-shrink-0 text-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={item.file_url}
              alt={item.title}
              className="size-40 rounded md:size-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExclusiveFeature;
