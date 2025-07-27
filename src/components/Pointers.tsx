// import React from "react";
// import type { PointerSection } from "../redux/slices/productSlice";

// const Pointers: React.FC<{ data: PointerSection }> = ({ data }) => {
//   return (
//     <section className="">
//       <h2 className="mb-4 text-2xl font-semibold">{data.name}</h2>
//       <ul className="list-inside list-disc space-y-2 rounded-lg border p-2 text-gray-700 md:p-6">
//         {data.values.map((p) => (
//           <li key={p.id}>{p.text}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Pointers;
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import type { PointerSection } from "../redux/slices/productSlice";

const Pointers: React.FC<{ data: PointerSection }> = ({ data }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">{data.name}</h2>
      <ul className="grid grid-cols-1 gap-2 rounded-lg border p-2 text-gray-700 md:grid-cols-[1fr_1fr] md:gap-4 md:p-6">
        {data.values.map((p) => (
          <li key={p.id} className="flex items-start gap-4">
            <IoCheckmarkSharp className="mt-1 size-5 flex-shrink-0 text-blue-500" />
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pointers;
