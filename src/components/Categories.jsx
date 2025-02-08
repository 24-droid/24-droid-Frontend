import React,{useState} from 'react'
const categories = [
    { id: "all", name: "All", img: "/images/all.jpg" },
    { id: "image-gen", name: "Image Generation", img: "/images/image-gen.jpg" },
    { id: "text-prompt", name: "Text-based Prompt", img: "/images/text-prompt.jpg" },
    { id: "text2speech", name: "Text2Speech", img: "/images/text2speech.jpg" },
  ];
  
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="flex justify-center items-start gap-10 mt-10">
      {/* Left White Box */}
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
                checked={selectedCategory === category.id}
                onChange={() => setSelectedCategory(category.id)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right Side: Image Display */}
      <div className="w-[500px] h-[300px] bg-gray-200 flex items-center justify-center rounded-xl shadow-lg">
        <img
          src={
            categories.find((cat) => cat.id === selectedCategory)?.img ||
            "/images/default.jpg"
          }
          alt="Category Display"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  )
}

export default Categories