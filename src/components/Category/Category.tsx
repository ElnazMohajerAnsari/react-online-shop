/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Category = (props: any) => {
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    props.handleChangeCategory(category);
  };

  return (
    <div className="w-full mt-6 lg:w-1/3 lg:mt-4 lg:pr-3 md:w-1/2 md:pl-4 md:mt-4 sm:w-full sm:mt-2">
      <select
        onChange={handleChangeCategory}
        id="select"
        defaultValue="Category"
        className="w-full border-b border-slate-800 h-10 rounded-md  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
      >
        <option value="Category">Category</option>
        {props.categories.map((category: string, key: number) => (
          <option key={key} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
