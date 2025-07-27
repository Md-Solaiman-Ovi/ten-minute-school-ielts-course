import React from "react";
import type { FeatureSection } from "../redux/slices/productSlice";

const Features: React.FC<{ data: FeatureSection }> = ({ data }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">
        How the course is laid out
      </h2>
      <div className="grid gap-5 rounded-lg bg-gray-900 shadow hover:shadow-lg sm:grid-cols-2">
        {data.values.map((f) => (
          <div key={f.id} className="flex gap-4 p-5 text-white">
            {f.icon && (
              <img
                src={f.icon}
                alt={f.title}
                className="h-12 w-12 object-contain"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{f.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
