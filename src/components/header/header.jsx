import { Nav } from "../nav";
import { useShoppingCart } from "../../shopping-cart";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./header.css";
import { formatNumber } from "../../utils/format";

export const Header = () => {
  const prevScrollY = useRef(0);
  const { shoppingCart, total } = useShoppingCart();
  const navigate = useNavigate();
  const routerChange = () => {
    navigate("/cart");
  };

  const totalQuantity = shoppingCart
    ? shoppingCart.reduce((pre, item) => {
        return pre + item.quantity;
      }, 0)
    : 0;

  useEffect(() => {
    const isSticky = (e) => {
      const scrollY = window.scrollY;
      let scrollDirection = scrollY > prevScrollY.current ? "down" : "up";

      const header = document.querySelector(".header-main");

      if (scrollDirection === "down") {
        if (scrollY > 250) {
          header.classList.add("is-sticky");
        }
      } else {
        // if (scrollY === 0) {
        header.classList.remove("is-sticky");
        // }
      }

      prevScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <header>
      <div className="bg-gray-100 text-neutral-500 h-[30px] flex items-center justify-center text-center uppercase text-xs font-semibold tracking-wider">
        Công ty cổ phần Thường Tín Market
      </div>

      <div className="header-main">
        <div className="flex items-center justify-center">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex toggle-menu-button xl:hidden items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="container mx-auto flex justify-between items-center gap-4 py-3">
            <div className="text-[#007cba] text-xl lg:text-[32px] font-bold text-center lg:text-start logo leading-none">
              <Link to="/">CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET</Link>
            </div>

            <div className="md:w-64 hidden lg:inline-flex">
              <div className="relative flex w-full">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Tìm kiếm..."
                />

                <button
                  className="search-button flex items-center justify-center text-white"
                  type="button"
                >
                  <i className="icon-search text-[1.2em]"></i>
                </button>
              </div>
            </div>
            <div className="header-button rounded-full">
              <button
                type="button"
                className="text-white flex gap-1 cart-button relative  bg-[#007cba] focus:outline-none font-bold rounded-full px-5 py-2 text-center"
                onClick={routerChange}
              >
                <span className="bg-red-500 absolute -top-1.5 -right-1 text-white text-xs font-bold h-5 w-5 flex justify-center items-center rounded-full">
                  {totalQuantity}
                </span>
                <span className="hidden lg:block uppercase">Giỏ hàng / </span>
                <span className="hidden lg:block">{formatNumber(total)}</span>
                <i className="icon-shopping-bag text-[1.2em]"></i>
              </button>
            </div>
          </div>
        </div>

        <Nav />
      </div>
    </header>
  );
};
