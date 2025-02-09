import React, { useState } from "react";
import text1 from "../assets/text1.png";
import text2 from "../assets/text2.png";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import speech from "../assets/speech.png";

const categories = [
  { id: "all", name: "All", img: [text1, text2, speech, Image1, Image2] },
  { id: "image-gen", name: "Image Generation", img: [Image1, Image2] },
  { id: "text-prompt", name: "Text-based Prompt", img: [text1, text2] },
  { id: "text2speech", name: "Text2Speech", img: [speech] },
];

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState(["all"]);

  const handleCheckboxChange = (categoryId) => {
    if (categoryId === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(categoryId)
          ? prev.filter((id) => id !== categoryId)
          : [...prev.filter((id) => id !== "all"), categoryId]
      );
    }
  };
  const selectedImages = selectedCategories.includes("all")
    ? categories.find((cat) => cat.id === "all")?.img || []
    : categories
        .filter((cat) => selectedCategories.includes(cat.id))
        .flatMap((cat) => cat.img);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-20">
      <div className="bg-white shadow-lg rounded-xl p-6 w-64">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCheckboxChange(category.id)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="w-[60%] h-[250px] bg-gray-200 flex items-center rounded-lg shadow-lg p-4 overflow-hidden relative">
        {selectedImages.length > 0 ? (
          <div className="flex gap-4 animate-marquee">
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Category"
                className="rounded-xl object-cover w-48 h-40"
              />
            ))}
            {selectedImages.map((image, index) => (
              <img
                key={`duplicate-${index}`}
                src={image}
                alt="Category"
                className="rounded-xl object-cover w-48 h-40"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500  ml-[40%]">Please select any category</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
