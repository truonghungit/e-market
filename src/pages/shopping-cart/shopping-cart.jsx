import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";
import { QuantityInput } from "../../components/input/quantity-input";

import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

export const ShoppingCartPage = () => {
  const { shoppingCart, total, removeProduct, updateQuantity } =
    useShoppingCart();

  return (
    <div className="px-2 lg:container">
      <ol className="flex items-center justify-center w-full p-3 py-8 space-x-2 text-sm font-medium text-center text-[#ccc] dark:text-gray-400 sm:text-base pl-0 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center uppercase">
          <NavLink
            to={`${appConfig.rootPath}/cart`}
            className="mr-3 text-lg md:text-xl lg:text-2xl text-neutral-800"
          >
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
            className="uppercase mr-3 text-lg md:text-xl lg:text-2xl"
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
          <NavLink className="uppercase text-lg md:text-xl lg:text-2xl">
            Order complete
          </NavLink>
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
          <div className="w-full lg:w-8/12 lg:pr-7">
            <div className="w-full overflow-x-auto">
              <table className="text-sm">
                <thead>
                  <tr className="uppercase text-[#777777] text-sm font-bold tracking-wider">
                    <th className="border-b-2 border-solid border-neutral-200 p-2 text-left">
                      Sản phẩm
                    </th>
                    <th className="border-b-2 border-solid border-neutral-200 p-2 text-left">
                      Giá
                    </th>
                    <th className="border-b-2 border-solid border-neutral-200 p-2 text-left">
                      Số lượng
                    </th>
                    <th className="border-b-2 border-solid border-neutral-200 p-2 text-right">
                      Tạm tính
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map((item) => (
                    <tr key={item.id}>
                      <td className="border-b border-solid border-neutral-300 pr-2 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => removeProduct(item)}
                            className="w-5 h-5 flex-shrink-0 text-[#c0c0c0] border-2 border-[#c0c0c0] hover:border-neutral-700 hover:text-neutral-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-sm rounded-full text-center inline-flex items-center justify-center"
                          >
                            &times;
                          </button>

                          <div className="w-16 flex-shrink-0">
                            <img
                              className="w-full max-w-full"
                              src={item.product.imageUrl}
                              alt={item.product.name}
                            />
                          </div>

                          <div className="uppercase">{item.product.name}</div>
                        </div>
                      </td>
                      <td className="border-b border-solid border-neutral-300 p-2 py-4">
                        <span className="font-bold">
                          {formatNumber(item.product.price)}
                        </span>
                      </td>
                      <td className="border-b border-solid border-neutral-300 p-2 py-4">
                        <QuantityInput
                          value={item.quantity}
                          onChange={(value) => updateQuantity(item.id, value)}
                        />
                      </td>
                      <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                        <span className="font-bold">
                          {formatNumber(item.product.price * item.quantity)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col md:flex-row">
              <Link
                to={`${rootPath}/shop`}
                className="btn text-[#007cba] font-semibold uppercase border-2 border-[#007cba] py-2 px-4 hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                ← Tiếp tục xem sản phẩm
              </Link>
              <button
                type="button"
                className="btn ml-0 mt-3 md:mt-0 md:ml-4 text-white font-semibold uppercase border-2 border-[#007cba] py-2 px-4 bg-[#007cba] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                Cập nhập giỏ hàng
              </button>
            </div>
          </div>

          <div className="w-full lg:w-4/12 lg:pl-7 mt-6 lg:mt-0 border-l-[1px] text-left">
            <div>
              <table className="text-sm mb-3 w-full border-[#ececec]">
                <thead>
                  <tr className="uppercase text-[#777777] text-sm font-bold">
                    <th
                      colSpan={2}
                      className="border-b-2 border-solid border-neutral-200 p-2 pl-0"
                    >
                      Cộng giỏ hàng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-solid border-neutral-300 pr-2 py-4">
                      Tạm tính
                    </td>
                    <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                      <span className="font-bold">{formatNumber(total)}</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-solid border-neutral-300 pr-2 py-4">
                      Tổng
                    </td>
                    <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                      <span className="font-bold">{formatNumber(total)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="my-6">
                <Link
                  to={`${rootPath}/checkout`}
                  className="btn w-full text-white font-semibold uppercase border-2 py-2 px-4 border-[#dd3333] bg-[#dd3333] focus:ring-4 focus:outline-none text-sm text-center inline-flex items-center justify-center"
                >
                  Tiến hành thanh toán
                </Link>
              </div>
            </div>

            <form className="w-full">
              <div className="w-full flex mb-3">
                <div className="w-full">
                  <div className="flex mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-tag-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                    <label className="font-semibold text-sm ml-2">
                      Phiếu ưu đãi
                    </label>
                  </div>

                  <input
                    type="text"
                    className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn w-full uppercase text-white bg-[#007cba] font-bold px-4 py-2"
                >
                  Áp dụng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
