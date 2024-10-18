import ImageSlider from "@/components/ImageSlider";
import React from "react";

export default function firstsemester() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-2xl font-bold text-gray-800 ">1학기 결과물</h1>
            <ImageSlider />
        </div>
    );
}
