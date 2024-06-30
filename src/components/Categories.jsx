/* eslint-disable react/prop-types */
import cn from "classnames/bind";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <div className="flex w-[768px] my-0 mx-auto overflow-x-auto px-4 py-4 md:px-0">
      {categories.map((c) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              "text-lg",
              "cursor-pointer",
              "whitespace-pre",
              "text-inherit",
              "pb-1",
              "ml-4",
              "first:ml-0",
              "hover:text-[#495057]",
              {
                "font-bold border-b-2 border-[#22b8cf] !text-[#22b8cf] !hover:text-[#3bc9db]":
                  isActive,
              }
            )
          }
          key={c.name}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
