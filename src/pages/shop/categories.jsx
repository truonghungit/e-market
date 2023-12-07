import { NavLink } from "react-router-dom";

export const ProductCategory = ({ category }) => {
  const navLinkClasses = ({ isActive }) => {
    if (isActive) {
      return "py-1.5 inline-block uppercase font-bold";
    }

    return "py-1.5 inline-block uppercase";
  };

  return (
    <li>
      <NavLink
        to={category.link}
        className={navLinkClasses}
      >
        {category.text}
      </NavLink>
    </li>
  );
};

export const categories = [
  {
    id: "bo-may-tinh-choi-game",
    link: "/product-category/bo-may-tinh-choi-game",
    text: "Bộ máy tính chơi game",
    name: "gaming",
  },
  {
    id: "man-hinh-may-tinh",
    link: "/product-category/man-hinh-may-tinh",
    text: "Màn hình máy tính",
    name: "monitor",
  },
  {
    id: "pc-van-phong-game-nhe",
    link: "/product-category/pc-van-phong-game-nhe",
    text: "PC văn phòng - Game nhẹ",
    name: "office",
  },
];

export const ProductCategories = () => {
  return (
    <div className="mb-5">
      <div className="uppercase font-bold text-[#777]">Browse</div>
      <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>
      <ul className="divide-y divide-[#777]">
        {categories.map((category) => (
          <ProductCategory category={category} key={category.link} />
        ))}
      </ul>
    </div>
  );
};
