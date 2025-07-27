import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchProduct } from "../redux/slices/productSlice";
import ChecklistComponent from "./Checklist";
import MediaGallery from "./MediaGallery";

import TopHeader from "./TopHeader";
import Instructors from "./Instructors";
import Features from "./Features";
import Pointers from "./Pointers";
import CourseDetails from "./CourseDetails";
import CourseExclusiveFeature from "./CourseExclusiveFeature";

const Course: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { product, status, error, lang } = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    dispatch(fetchProduct(lang));
  }, [dispatch, lang]);

  if (status === "loading")
    return <div className="p-10 text-center text-lg">Loading...</div>;
  if (status === "failed")
    return <div className="p-10 text-center text-red-500">{error}</div>;
  if (!product) return null;

  const instructors = product.sections.find(
    (sec) => sec.type === "instructors",
  );
  const features = product.sections.find((sec) => sec.type === "features");
  const pointers = product.sections.find((sec) => sec.type === "pointers");
  const aboutSection = product.sections.find((sec) => sec.type === "about");
  const courseExclusiveFeature = product.sections.find(
    (sec) => sec.type === "feature_explanations",
  );

  return (
    <div className="relative min-h-screen bg-white">
      <TopHeader title={product.title} description={product.description} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-3">
        <section className="space-y-10 lg:col-span-2">
          {instructors && <Instructors data={instructors} />}
          {features && <Features data={features} />}
          {pointers && <Pointers data={pointers} />}
          {aboutSection && <CourseDetails data={aboutSection} />}
          {courseExclusiveFeature && (
            <CourseExclusiveFeature data={courseExclusiveFeature} />
          )}
        </section>

        <section>
          <div className="overflow-hidden border bg-white p-1 shadow-md lg:absolute lg:top-16">
            <MediaGallery media={product.media} />
            <div className="p-5 text-center">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">৳3850</span>
                <span className="text-gray-500 line-through">৳5000</span>
                <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-600">
                  1150 ৳ ছাড়
                </span>
              </div>
              {/* CTA button from API */}
              {product.cta_text?.name && (
                <button className="mt-3 w-full rounded-lg bg-green-500 py-2 font-semibold text-white shadow transition hover:bg-green-600">
                  {product.cta_text.name}
                </button>
              )}
            </div>

            {product.checklist.length > 0 && (
              <div className="border-t p-5">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  এই কোর্সে যা থাকছে
                </h3>
                <ChecklistComponent items={product.checklist} />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Course;
