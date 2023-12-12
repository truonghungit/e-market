import { Link, useParams } from "react-router-dom";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  useGetSimilarProducts,
  useGetProductDetail,
} from "../../queries/products.query";
import { Tabs } from "../tabs";

import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";
import { ProductItem } from "../../components/product-item";
import { QuantityInput } from "../../components/input/quantity-input";
import { categories } from "../shop/categories";

import appConfig from "../../configs";

const rootPath = appConfig.rootPath;

export const ProductItemDetails = () => {
  const { slug } = useParams();
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const { addProduct } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);
  const { data } = useGetProductDetail({ slug: slug });

  const product = data ? data.product : null;
  const nextProduct = data ? data.next : null;
  const previousProduct = data ? data.previous : null;

  const { data: similarProducts } = useGetSimilarProducts({
    productId: product?.id,
    pageSize: 4,
  });

  const getCategory = (categoryId) => {
    return categories.find((item) => item.id === categoryId);
  };

  const addProductToCart = () => {
    addProduct({ quantity, product });
  };

  if (!product) {
    return <div>No product found</div>;
  }
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex">
          <div className="w-1/2">
            <img
              className="w-full max-w-full cursor-pointer object-cover"
              src={product.imageDetailUrl}
              alt={product.name}
              onClick={openModal}
            />

            <button
              onClick={openModal}
              type="button"
              className="w-9 h-9 text-[#c0c0c0] border border-[#c0c0c0] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center"
            >
              <i className="icon-expand"></i>
            </button>
          </div>
          <div className="w-1/2 p-8 pr-0 pt-5">
            <div className="flex gap-4 justify-between">
              <div>
                <div>
                  <div className="uppercase mb-2 text-neutral-500 text-sm">
                    <Link to={rootPath}>Trang chủ</Link>
                    <span> / </span>
                    <Link to={`${rootPath}/${getCategory(product.category)?.link}`}>
                      {getCategory(product.category)?.text}
                    </Link>
                  </div>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-2">
                  {product.name}
                </div>
              </div>

              <div className="flex-shrink-0">
                {previousProduct && (
                  <Link
                    to={`${rootPath}/product/${previousProduct}`}
                    className="ml-2 w-8 h-8 text-[#c0c0c0] border border-[#c0c0c0] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm text-center inline-flex items-center justify-center"
                  >
                    <i className="icon-angle-left"></i>
                  </Link>
                )}

                {nextProduct && (
                  <Link
                    to={`${rootPath}/product/${nextProduct}`}
                    className="ml-2 w-8 h-8 text-[#c0c0c0] border border-[#c0c0c0] hover:bg-[#007cba] hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm text-center inline-flex items-center justify-center"
                  >
                    <i className="icon-angle-right"></i>
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

            <div className="text-xl text-neutral-900 font-bold mb-2">
              <span>{formatNumber(product.price)}</span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            ></div>

            <div className="mt-6 flex flex-col gap-4">
              <div>
                <QuantityInput value={quantity} onChange={setQuantity} />
              </div>

              <div>
                <button
                  onClick={addProductToCart}
                  type="button"
                  className="text-white cursor-pointer font-bold text-[15px] uppercase bg-red-600 hover:bg-red-700 focus:outline-none px-5 py-1.5 text-center"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
            <div className="text-xs mt-6 border-t pt-2">
              <span className="text-neutral-600">Danh mục: </span>
              <span className="uppercase my-1 text-neutral-900">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs />
        </div>

        <div className="mt-6">
          <hr className="mb-4" />
          <div className="text-xl uppercase font-bold text-neutral-800 mb-2">
            Sản phẩm tương tự
          </div>

          <div className="mt-6">
            {similarProducts && (
              <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
                {similarProducts.map((product) => (
                  <ProductItem
                    {...product}
                    key={product.id}
                    onAddToCart={(quantity) =>
                      addProduct({ quantity, product })
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full flex items-center justify-center">
                    <img
                      className="w-full max-w-full"
                      src={product.imageDetailUrl}
                      alt={product.name}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
