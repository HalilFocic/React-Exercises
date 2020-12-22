import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((c, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
