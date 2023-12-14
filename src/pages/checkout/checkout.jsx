import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";

import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

export const CheckoutPage = () => {
  const { shoppingCart, total } = useShoppingCart();

  return (
    <div className="px-2 lg:container">
      <ol className="flex items-center justify-center w-full p-3 py-8 space-x-2 text-sm font-medium text-center text-[#ccc] dark:text-gray-400 sm:text-base pl-0 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center uppercase">
          <NavLink to={`${appConfig.rootPath}/cart`} className="mr-3 text-lg md:text-xl lg:text-2xl">
            Shopping Cart
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#777"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <NavLink
            to={`${appConfig.rootPath}/checkout`}
            className="uppercase mr-3 text-lg md:text-xl lg:text-2xl text-neutral-800"
          >
            Checkout details
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </li>
        <li className="flex items-center ">
          <NavLink className="uppercase text-lg md:text-xl lg:text-2xl">Order complete</NavLink>
        </li>
      </ol>

      {shoppingCart.length === 0 ? (
        <div>
          <div className="text-center">
            <p>Chưa có sản phẩm nào trong giỏ hàng.</p>

            <div className="mt-6">
              <Link
                to={`${rootPath}/shop`}
                className="text-white font-semibold uppercase border-2 border-[#007cba] py-2 px-4 bg-[#007cba] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                Quay lại cửa hàng
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row mb-10">
          <div className="w-full lg:w-7/12">
            <div></div>
            <form>
              <div className="font-bold uppercase mt-6">
                Thông tin thanh toán
              </div>
              <div className="flex gap-4 mt-4">
                <div className="w-1/2">
                  <label className="font-semibold text-sm block mb-2">
                    Tên *
                  </label>
                  <input
                    type="text"
                    className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-sm block mb-2">
                    Họ *
                  </label>
                  <input
                    type="text"
                    className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Tên công ty (tuỳ chọn)
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                />
              </div>
              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Quốc gia/Khu vực *
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                />
              </div>

              <div className="mt-6 flex gap-4">
                <div className="w-1/2">
                  <label className="font-semibold text-sm block mb-2">
                    Địa chỉ *
                  </label>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-sm block mb-2 opacity-0">
                    Apartment
                  </label>
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Tỉnh / Thành phố *
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                />
              </div>

              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Số điện thoại *
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                />
              </div>

              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Địa chỉ email *
                </label>
                <input
                  type="text"
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                />
              </div>

              <div className="font-bold uppercase mt-10">
                Thông tin thanh toán
              </div>

              <div className="mt-6">
                <label className="font-semibold text-sm block mb-2">
                  Ghi chú đơn hàng (tuỳ chọn)
                </label>
                <textarea
                  rows={5}
                  placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                  className="bg-white border border-gray-300 focus:outline-none focus:border-[#007cba] focus:shadow-[0 0 5px #ccc] text-gray-900 text-sm block w-full p-2.5 "
                ></textarea>
              </div>
            </form>
          </div>

          <div className="w-full mt-4 lg:mt-0 lg:w-5/12 lg:pl-7">
            <div className="py-6 px-7 border-2 border-[#007cba]">
              <div className="font-bold uppercase">Đơn hàng của bạn</div>

              <table className="text-sm mt-3 w-full">
                <thead>
                  <tr className="uppercase text-[#777777] text-sm font-bold tracking-wider">
                    <th className="border-b-2 border-solid border-neutral-200 p-2 pl-0 text-left">
                      Sản phẩm
                    </th>
                    <th className="border-b-2 border-solid border-neutral-200 p-2 pr-0 text-right">
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map((item) => (
                    <tr key={item.id}>
                      <td className="border-b border-solid border-neutral-300 pr-2 py-4">
                        <div className="uppercase">{item.product.name}</div>
                      </td>
                      <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                        <span className="font-bold">
                          {formatNumber(item.product.price * item.quantity)}
                        </span>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td className="text-[#777777] border-b  border-solid font-bold border-neutral-300 pr-2 py-4">
                      Tạm tính
                    </td>
                    <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                      <span className="font-bold">{formatNumber(total)}</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-[#777777] border-b-2 border-solid font-bold border-neutral-300 pr-2 py-4">
                      Tổng
                    </td>
                    <td className="border-b-2 border-solid border-neutral-300 pl-2 py-4 text-right">
                      <span className="font-bold">{formatNumber(total)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="text-neutral-500 mt-4">
                Không có hình thức thanh toán nào được thiết lập theo địa chỉ
                khu vực của bạn. Vui lòng liên hệ với quản trị website để hỗ trợ
                vấn đề này.
              </p>

              <button
                type="button"
                className="mt-4 btn text-white font-semibold uppercase border-2 py-2 px-4 border-[#dd3333] bg-[#dd3333] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
              >
                Đặt hàng
              </button>

              <p className="mt-4 text-sm text-neutral-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a href="/#" className="text-neutral-700">
                  chính sách riêng tư
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
