
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Media {
  name: string; // e.g., "preview_gallery", "thumbnail", "book_preview"
  resource_type: "video" | "image";
  resource_value: string; // for video, this is the YouTube video ID
  thumbnail_url?: string; // optional, only present for videos or some images
}

export interface Checklist {
  id: string | number;
  text: string;
  icon?: string;
  color?: string;
  list_page_visibility?: boolean;
}

export interface CtaText { 
  name: string; 
  value: string ;
};

// Instructor section values
export interface InstructorValue {
  name: string;
  short_description: string;
  description: string; // HTML
  has_instructor_page?: boolean;
  image?: string;
  slug?: string;
}

// Feature section values
export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

// Pointer section values
export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}
export interface AboutValue {
  title: string; // contains HTML
  description: string; // contains HTML
  icon: string;
  id: string;
}

export interface FeatureExplanationValue {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail?: string;
}

// Discriminated union for sections
export interface InstructorSection {
  type: "instructors";
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  values: InstructorValue[];
}

export interface FeatureSection {
  type: "features";
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  values: FeatureValue[];
}

export interface PointerSection {
  type: "pointers";
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  values: PointerValue[];
}

export interface AboutSection {
  type: "about";
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  values: AboutValue[];
}

export interface FeatureExplanationSection {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  values: FeatureExplanationValue[];
}

export type Section = InstructorSection | FeatureSection | PointerSection| FeatureExplanationSection | AboutSection ;

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  cta_text: CtaText;
  sections: Section[];
}

interface ProductState {
  product: ProductData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lang: "en" | "bn";
}

const initialState: ProductState = {
  product: null,
  status: "idle",
  error: null,
  lang: "en",
};

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (lang: "en" | "bn") => {
  const response = await axios.get(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      params: { lang },
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
    }
  );
 
  return response.data.data ?? response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {  
    setLanguage(state, action) {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch product";
      });
  },
});

export const { setLanguage } = productSlice.actions;
export default productSlice.reducer;
