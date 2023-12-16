import { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

const NavItem = ({ to, text, onClick }) => {
  return (
    <li className="border-t border-t-[#ececec]">
      <NavLink to={to} className="block py-3 px-4" onClick={onClick}>
        <span className="uppercase font-bold text-[13px]">{text}</span>
      </NavLink>
    </li>
  );
};

export const NavMobile = ({ show, onClose }) => {
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
            <div className="absolute right-0 top-0  flex pr-2 pt-4 sm:pl-4">
              <button
                type="button"
                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => handleClose()}
              >
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </Transition.Child>

          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[260px]">
                  <div className="flex h-full flex-col overflow-y-auto bg-[rgba(255,255,255,.95)] py-6 shadow-xl">
                    <div className="relative flex w-full p-4">
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

                    <nav className="mt-4">
                      <ul className="">
                        <NavItem
                          to={rootPath}
                          text="Trang Chủ"
                          onClick={() => handleClose()}
                        />
                        <NavItem
                          to={`${rootPath}/gioi-thieu`}
                          text="Giới thiệu"
                          onClick={() => handleClose()}
                        />
                        <NavItem
                          to={`${rootPath}/shop`}
                          text="Cửa hàng"
                          onClick={() => handleClose()}
                        />
                        <NavItem
                          to={`${rootPath}/tin-tuc`}
                          text="Tin tức"
                          onClick={() => handleClose()}
                        />
                        <li className="border-t border-t-[#ececec] rounded-none">
                          <span
                            className="min-h-[48px] py-3 px-4 flex justify-between items-center cursor-pointer"
                            onClick={() => setCollapse(!collapse)}
                          >
                            <span className="uppercase font-bold text-[13px]">
                              Chính sách
                            </span>
                            <svg
                              className={
                                collapse
                                  ? "transition-all duration-300 w-2.5 h-2.5 ms-2 rotate-0"
                                  : "transition-all duration-300 w-2.5 h-2.5 ms-2 rotate-180"
                              }
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </span>

                          <div className={collapse ? "hidden" : "block"}>
                            <ul className="text-sm text-gray-700 bg-[#ebebeb]">
                              <li className="pl-3">
                                <Link
                                  to={`${rootPath}/chinh-sach-bao-mat`}
                                  className="block w-full py-2 px-3 text-[#777]"
                                  onClick={() => handleClose()}
                                >
                                  <span>Chính sách bảo mật</span>
                                </Link>
                              </li>
                              <li className="pl-3">
                                <Link
                                  to={`${rootPath}/dieu-khoan-dich-vu`}
                                  className="block w-full py-2 px-3 text-[#777]"
                                  onClick={() => handleClose()}
                                >
                                  <span>Điều khoản dịch vụ</span>
                                </Link>
                              </li>
                              <li className="pl-3">
                                <Link
                                  to={`${rootPath}/chinh-sach-doi-tra-hang`}
                                  className="block w-full py-2 px-3 text-[#777]"
                                  onClick={() => handleClose()}
                                >
                                  <span>Chính sách đổi hoặc trả hàng</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <NavItem
                          to={`${rootPath}/lien-he`}
                          text="Liên hệ"
                          onClick={() => handleClose()}
                        />
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
