import React from "react";
import type { Checklist } from "../redux/slices/productSlice";

interface Props {
  items: Checklist[];
}

const ChecklistComponent: React.FC<Props> = ({ items }) => (
  <ul className="space-y-3">
    {items
      //   .filter((item) => item.list_page_visibility !== false) // show only items marked visible
      .map((item) => (
        <li
          key={item.id}
          className="text-[text-base font-normal] flex items-center gap-3 text-base font-normal"
        >
          {item.icon && (
            <img
              src={item.icon}
              alt=""
              className="h-5 w-5 flex-shrink-0 object-contain"
            />
          )}
          <span className="">{item.text}</span>
        </li>
      ))}
  </ul>
);

export default ChecklistComponent;
