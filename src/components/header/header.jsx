import { useEffect, useRef, useState, Fragment } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import "./header.css";

import { Nav, NavMobile } from "../nav";
import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";
import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

export const Header = () => {
  const prevScrollY = useRef(0);
  const { shoppingCart, total, removeProduct } = useShoppingCart();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [openCart, setOpenCart] = useState(false);

  const [isShowMobileNav, setIsShowMobileNav] = useState(false);

  const totalQuantity = shoppingCart
    ? shoppingCart.reduce((pre, item) => {
        return pre + item.quantity;
      }, 0)
    : 0;

  const handleSearch = () => {
    navigate(`${rootPath}/shop?s=${keyword}`);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {});

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
    <>
      <header>
        <div className="bg-gray-100 text-neutral-500 h-[30px] flex items-center justify-center text-center uppercase text-xs font-semibold tracking-wider">
          Công ty cổ phần Thường Tín Market
        </div>

        <div className="header-main">
          <div className="flex flex-col items-stretch">
            <div className="px-2 w-full lg:container mx-auto flex justify-between items-center gap-4 py-3">
              <div className="flex gap-4 flex-row justify-start items-center">
                <button
                  data-collapse-toggle="navbar-dropdown"
                  type="button"
                  onClick={() => setIsShowMobileNav(true)}
                  className="inline-flex toggle-menu-button md:hidden items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none "
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

                <div className="text-[#007cba] text-xl md:text-[24px] lg:text-[32px] lg:max-w-sm font-bold text-center lg:text-start logo leading-none">
                  <Link to={rootPath}>CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET</Link>
                </div>
              </div>

              <div className="md:w-64 hidden md:inline-flex">
                <div className="relative flex w-full">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Tìm kiếm..."
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    onKeyDown={handleKeyDown}
                  />

                  <button
                    className="search-button flex items-center justify-center text-white"
                    type="button"
                    onClick={handleSearch}
                  >
                    <i className="icon-search text-[1.2em]"></i>
                  </button>
                </div>
              </div>
              <div className="header-button rounded-full relative">
                <button
                  onClick={() => setOpenCart(true)}
                  className="lg:hidden text-white h-8 w-8 lg:w-auto lg:h-auto flex items-center gap-1 cart-button relative  bg-[#007cba] focus:outline-none font-bold rounded-full px-2 lg:px-5 py-2 text-center"
                >
                  {totalQuantity > 0 && (
                    <span className="bg-red-500 absolute -top-1.5 -right-1 text-white text-xs font-bold h-5 w-5 flex justify-center items-center rounded-full">
                      {totalQuantity}
                    </span>
                  )}
                  <i className="icon-shopping-bag text-[1.2em]"></i>
                </button>

                <Popover className="relative hidden lg:block">
                  {({ open }) => (
                    <>
                      <Popover.Button className="text-white h-8 w-8 lg:w-auto lg:h-auto flex items-center gap-1 cart-button relative  bg-[#007cba] focus:outline-none font-bold rounded-full px-2 lg:px-5 py-2 text-center">
                        {totalQuantity > 0 && (
                          <span className="bg-red-500 absolute -top-1.5 -right-1 text-white text-xs font-bold h-5 w-5 flex justify-center items-center rounded-full">
                            {totalQuantity}
                          </span>
                        )}
                        <span className="hidden lg:block uppercase">
                          Giỏ hàng /{" "}
                        </span>
                        <span className="hidden lg:block">
                          {formatNumber(total)}
                        </span>
                        <i className="icon-shopping-bag text-[1.2em]"></i>
                      </Popover.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 w-96">
                          <div className="overflow-hidden bg-white shadow-lg ring-1 ring-black/5">
                            <div className="p-6">
                              {shoppingCart.length === 0 ? (
                                <>
                                  <div>Chưa có sản phẩm trong giỏ hàng.</div>
                                </>
                              ) : (
                                <>
                                  {shoppingCart.map((item) => (
                                    <div key={item.id}>
                                      <div className="border-b border-solid border-neutral-300 pr-2 py-4">
                                        <div className="flex items-center gap-3">
                                          <div className="w-16 flex-shrink-0">
                                            <img
                                              className="w-full max-w-full"
                                              src={item.product.imageUrl}
                                              alt={item.product.name}
                                            />
                                          </div>

                                          <div className="uppercase">
                                            {item.product.name}
                                          </div>

                                          <button
                                            type="button"
                                            onClick={() => removeProduct(item)}
                                            className="w-5 h-5 flex-shrink-0 text-[#c0c0c0] border-2 border-[#c0c0c0] hover:border-neutral-700 hover:text-neutral-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm rounded-full text-center inline-flex items-center justify-center"
                                          >
                                            &times;
                                          </button>
                                        </div>

                                        <div className="font-bold mt-2 justify-center text-neutral-600 flex gap-1 text-sm">
                                          <span>{item.quantity}</span>
                                          <span>x</span>
                                          <span>
                                            {formatNumber(item.product.price)}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  <div className="font-bold text-center mt-4">
                                    <span>Tổng số phụ:</span>
                                    <span className="ml-2">
                                      {formatNumber(total)}
                                    </span>
                                  </div>
                                  <div className="mt-4">
                                    <Popover.Button
                                      className="btn w-full text-white font-semibold uppercase border-2 py-2 px-4 border-[#007cba] bg-[#007cba] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
                                      as={Link}
                                      to={`${rootPath}/cart`}
                                    >
                                      Xem giỏ hàng
                                    </Popover.Button>
                                  </div>

                                  <div className="mt-4">
                                    <Popover.Button
                                      to={`${rootPath}/checkout`}
                                      className="btn w-full text-white font-semibold uppercase border-2 py-2 px-4 border-[#dd3333] bg-[#dd3333] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
                                      as={Link}
                                    >
                                      Thanh toán
                                    </Popover.Button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </div>

            <div className="border-t border-[#ddd] mx-4 block lg:hidden"></div>
          </div>

          {!isShowMobileNav && <Nav />}

          <NavMobile
            show={isShowMobileNav}
            onClose={() => setIsShowMobileNav(false)}
          />
        </div>
      </header>

      <Transition.Root show={openCart} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={setOpenCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute left-0 top-0  flex pr-2 pt-4 sm:pl-4">
                <button
                  type="button"
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setOpenCart(false)}
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>

            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[320px]">
                    <div className="flex h-full flex-col overflow-y-auto bg-[rgba(255,255,255,.95)] py-6 px-6 shadow-xl">
                      <div>
                        <div className="mb-4 text-lg uppercase font-semibold">
                          Giỏ hàng
                        </div>
                        {shoppingCart.length === 0 ? (
                          <>
                            <div>Chưa có sản phẩm trong giỏ hàng.</div>
                          </>
                        ) : (
                          <>
                            {shoppingCart.map((item) => (
                              <div key={item.id}>
                                <div className="border-b border-solid border-neutral-300 pr-2 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-16 flex-shrink-0">
                                      <img
                                        className="w-full max-w-full"
                                        src={item.product.imageUrl}
                                        alt={item.product.name}
                                      />
                                    </div>

                                    <div className="uppercase">
                                      {item.product.name}
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() => removeProduct(item)}
                                      className="w-5 h-5 flex-shrink-0 text-[#c0c0c0] border-2 border-[#c0c0c0] hover:border-neutral-700 hover:text-neutral-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm rounded-full text-center inline-flex items-center justify-center"
                                    >
                                      &times;
                                    </button>
                                  </div>

                                  <div className="font-bold mt-2 justify-center text-neutral-600 flex gap-1 text-sm">
                                    <span>{item.quantity}</span>
                                    <span>x</span>
                                    <span>
                                      {formatNumber(item.product.price)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}

                            <div className="font-bold text-center mt-4">
                              <span>Tổng số phụ:</span>
                              <span className="ml-2">
                                {formatNumber(total)}
                              </span>
                            </div>
                            <div className="mt-4">
                              <Link
                                onClick={() => setOpenCart(false)}
                                className="btn w-full text-white font-semibold uppercase border-2 py-2 px-4 border-[#007cba] bg-[#007cba] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
                                to={`${rootPath}/cart`}
                              >
                                Xem giỏ hàng
                              </Link>
                            </div>

                            <div className="mt-4">
                              <Link
                                onClick={() => setOpenCart(false)}
                                to={`${rootPath}/checkout`}
                                className="btn w-full text-white font-semibold uppercase border-2 py-2 px-4 border-[#dd3333] bg-[#dd3333] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
                              >
                                Thanh toán
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
