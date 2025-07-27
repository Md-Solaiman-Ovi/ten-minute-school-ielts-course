import React from "react";
import type { InstructorSection } from "../redux/slices/productSlice";

const Instructors: React.FC<{ data: InstructorSection }> = ({ data }) => {
  const instructor = data.values[0];
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Course instructor</h2>
      <div className="flex items-center gap-4 rounded-lg border bg-white p-5 shadow-sm">
        {instructor?.image && (
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-20 w-20 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="cursor-pointer text-lg font-semibold hover:text-green-500">
            {instructor?.name}
          </h3>
          <div
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{
              __html: instructor?.description || "",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Instructors;
