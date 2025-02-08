import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10">
      <div className="flex border-b">
        {["description", "additional", "reviews"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-black font-semibold" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "description" && <p>{product.description}</p>}
        {activeTab === "additional" && <p>Additional details about {product.name}...</p>}
        {activeTab === "reviews" && <p>Customer reviews for {product.name}...</p>}
      </div>
    </div>
  );
}
