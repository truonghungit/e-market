import { Link, NavLink, Outlet } from "react-router-dom";
import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";
import { QuantityInput } from "../../components/input/quantity-input";

export const ShoppingCartPage = () => {
  const { shoppingCart, removeProduct } = useShoppingCart();

  console.log({ shoppingCart });

  return (
    <div className="container">
      <ol className="flex items-center justify-center w-full p-3 py-8 space-x-2 text-sm font-medium text-center text-[#ccc] dark:text-gray-400 sm:text-base pl-0 sm:space-x-4 rtl:space-x-reverse">
        <li className="flex items-center uppercase">
          <NavLink to="/cart" className="mr-3 text-2xl">
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
          <NavLink to="/checkout" className="uppercase mr-3 text-2xl">
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
        <li className="flex items-center uppercase">
          <NavLink className="text-2xl">Order complete</NavLink>
        </li>
      </ol>

      {shoppingCart.length === 0 ? (
        <div>
          <div className="text-center">
            <p>Chưa có sản phẩm nào trong giỏ hàng.</p>

            <div className="mt-6">
              <Link
                to={"/shop"}
                className="text-white font-semibold uppercase border-2 border-[#007cba] py-2 px-4 bg-[#007cba] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                Quay lại cửa hàng
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mb-10">
          <div className="w-7/12">
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

                        <div className="uppercase">{item.product.name}</div>
                      </div>
                    </td>
                    <td className="border-b border-solid border-neutral-300 p-2 py-4">
                      <span className="font-bold">
                        {formatNumber(item.product.price)}
                      </span>
                    </td>
                    <td className="border-b border-solid border-neutral-300 p-2 py-4">
                      <QuantityInput value={1} onChange={() => {}} />
                    </td>
                    <td className="border-b border-solid border-neutral-300 pl-2 py-4 text-right">
                      <span className="font-bold">
                        {formatNumber(item.product.price)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <Link
                to={"/shop"}
                className=" text-[#007cba] font-semibold uppercase border-2 border-[#007cba] py-2 px-4 hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                ← Tiếp tục xem sản phẩm
              </Link>
              <button
                type="button"
                className="ml-4 text-white font-semibold uppercase border-2 border-[#007cba] py-2 px-4 bg-[#007cba] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm text-center inline-flex items-center justify-center"
              >
                Cập nhập giỏ hàng
              </button>
            </div>
          </div>
          <div className="w-5/12"></div>
        </div>
      )}
    </div>
  );
};
