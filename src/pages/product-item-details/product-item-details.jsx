import { useParams, useNavigate } from "react-router-dom";
import products from "../../repositories/data/products";
import { useState } from "react";

// import { QuantityInput } from "../../input/quantity-input";

export const ProductItemDetails = () => {
  const { slug } = useParams();
  const [currentTab, setCurrentTab] = useState("description");
  let navigate = useNavigate();

  const productItem = products.find((productItem) => productItem.slug === slug);

  const descriptionTabSelectedAction = () => {
    setCurrentTab("description");
    navigate("/product-description");
  };

  const ratingTabSelectedAction = () => {
    setCurrentTab("rate");
  };

  const addProductToCart = () => {};

  return (
    <div className="py-8">
      <div className="container">
        <div className="flex">
          <div className="w-1/2">
            <img
              className="w-full max-w-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={productItem.imageDetailUrl}
              alt={productItem.name}
            />
          </div>
          <div className="w-1/2 p-8">
            <div className="text-2xl font-bold text-neutral-900 mb-2">
              {productItem.name}
            </div>

            <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

            <div className="text-xl text-neutral-900 font-bold mb-2">
              <span>{productItem.price}</span>
              <span className="">₫</span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: productItem.shortDescription }}
            ></div>

            <div className="mt-6 flex gap-4">
              {/* <QuantityInput /> */}

              <button
                onClick={addProductToCart}
                type="button"
                className="text-white cursor-pointer font-bold text-[15px] uppercase bg-red-600 hover:bg-red-700 focus:outline-none px-5 py-1.5 text-center"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="text-xs mt-6 border-t pt-2">
              <span className="text-neutral-600">Danh mục: </span>
              <span className="uppercase my-1 text-neutral-900">
                {productItem.category}
              </span>
            </div>
          </div>
        </div>
        <div className="product-footer mt-16">
          <ul
            className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
            role="tablist"
            data-te-nav-ref
          >
            <li role="presentation">
              <button
                onClick={descriptionTabSelectedAction}
                className={
                  currentTab === "description"
                    ? "text-black border-[#007cba] font-bold inline-block p-4  border-b-2  rounded-t-lg active"
                    : "inline-block p-4 rounded-t-lg active transition-all ease-in duration-100 "
                }
                aria-current="page"
              >
                MÔ TẢ SẢN PHẨM
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={ratingTabSelectedAction}
                className={
                  currentTab === "rate"
                    ? "text-black font-bold border-[#007cba] inline-block p-4 border-b-2 rounded-t-lg active"
                    : "inline-block p-4 rounded-t-lg active transition-all ease-in duration-100 "
                }
              >
                ĐÁNH GIÁ(0)
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
