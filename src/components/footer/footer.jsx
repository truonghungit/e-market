import { Link } from "react-router-dom";

import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#007cba]">
        <div className="px-2 lg:container py-8  text-white">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <div className="uppercase font-semibold text-neutral-100">
                Giới thiệu về chúng tôi
              </div>
              <div className="mt-3 mb-4 h-[3px] w-9 bg-blue-400"></div>
              <h4 className="uppercase font-bold text-lg mb-2">
                {appConfig.company.name}
              </h4>
              <div className="text-neutral-100">
                <p className="mb-0.5">Địa chỉ: {appConfig.company.address}</p>
                <p className="mb-0.5">
                  Điện thoại: {appConfig.company.phoneNumber}
                </p>
                <p className="mb-0.5">
                  Mã số doanh nghiệp: {appConfig.company.businessCode}
                </p>
                <p className="mb-0.5">Website: {appConfig.company.website}</p>
                <p className="mb-0.5">Email: {appConfig.company.email}</p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="uppercase font-semibold text-neutral-100">
                Chính sách và điều khoản
              </div>
              <div className="mt-3 mb-4 h-[3px] w-9 bg-blue-400"></div>
              <ul className="divide-y divide-blue-600">
                <li>
                  <Link
                    to={`${rootPath}/chinh-sach-bao-mat`}
                    className="py-1.5 inline-block text-neutral-100 hover:text-neutral-50 "
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${rootPath}/chinh-sach-doi-tra-hang`}
                    className="py-1.5 inline-block text-neutral-100 hover:text-neutral-50"
                  >
                    Chính sách đổi/ trả hàng
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${rootPath}/dieu-khoan-dich-vu`}
                    className="py-1.5 inline-block text-neutral-100 hover:text-neutral-50"
                  >
                    Điều khoản dịch vụ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-600 text-neutral-200 py-3 text-center uppercase text-sm font-bold">
        {appConfig.company.name}
      </div>
    </footer>
  );
};
