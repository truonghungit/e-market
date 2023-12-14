import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

const NavItem = ({ to, text }) => {
  return (
    <li className="nav-item">
      <NavLink to={to} className="block py-2.5 w-max">
        <span className="uppercase font-bold text-[13px]">{text}</span>
      </NavLink>
    </li>
  );
};

export const Nav = () => {
  return (
    <nav className="bg-[#007cba] border-gray-200 hidden md:block">
      <div className="px-2 lg:container flex flex-wrap items-center justify-between mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-row gap-6">
            <NavItem to={rootPath} text="Trang Chủ" />
            <NavItem to={`${rootPath}/gioi-thieu`} text="Giới thiệu" />
            <NavItem to={`${rootPath}/shop`} text="Cửa hàng" />
            <NavItem to={`${rootPath}/tin-tuc`} text="Tin tức" />

            <li className="dropdown nav-item">
              <a href="/#" className="py-2.5 h-full w-max flex items-center">
                <span className="uppercase font-bold text-[13px]">
                  Chính sách
                </span>
                <svg
                  className="w-2.5 h-2.5 ms-2"
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
              </a>

              <div className="dropdown-menu hidden z-10 font-normal w-56 bg-white divide-y divide-gray-100 rounded-b-lg shadow-md border border-neutral-300 border-t-0 before:content-[''] before:absolute before:h-0 before:w-0 before:border-x-8 before:border-x-transparent before:border-b-8 before:border-b-white before:-top-2 before:left-6  ">
                <ul className="divide-y divide-[#ececec] py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <Link
                      to={`${rootPath}/chinh-sach-bao-mat`}
                      className="block w-full py-2 px-3 text-[#777]"
                    >
                      <span>Chính sách bảo mật</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${rootPath}/dieu-khoan-dich-vu`}
                      className="block w-full py-2 px-3 text-[#777]"
                    >
                      <span>Điều khoản dịch vụ</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${rootPath}/chinh-sach-doi-tra-hang`}
                      className="block w-full py-2 px-3 text-[#777]"
                    >
                      <span>Chính sách đổi hoặc trả hàng</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <NavItem to={`${rootPath}/lien-he`} text="Liên hệ" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
