import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const categories = [
  "Isaan food",
  "Deep fried or Stir-fried",
  "Thai Soup Dishes",
  "Spicy Salad Dishes",
  "Local Thai Delicacies",
  "One-Dish Meal",
];

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/menu/${formattedCategory}`);
  };

  return (
    <div className="pt-10 bg-white">
      <div className="flex gap-4 justify-center mb-2 flex-wrap pt-8">
        {categories.map((category) => {
          const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
          const isActive = location.pathname === `/menu/${formattedCategory}`;

          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`italic text-xl hover:text-slate-500 ${
                isActive ? "text-[#4A6A51] font-bold" : "text-black"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
