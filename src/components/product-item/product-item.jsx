import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import "./product-item.css";

import { QuantityInput } from "../input/quantity-input";

export const ProductItem = ({
  name,
  price,
  category,
  slug,
  imageUrl,
  shortDescription = "",
}) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const addProductToCart = () => {
    closeModal();
  };

  return (
    <>
      <div className="w-full product-item">
        <div className="relative overflow-hidden image-box">
          <div className="">
            <Link to={"product/" + slug}>
              <img className="w-full max-w-full" src={imageUrl} alt={name} />
            </Link>
          </div>
          <div className="quick-view-button absolute bg-[#007cba] bg-opacity-80 flex justify-center items-center left-0 right-0 bottom-0">
            <button
              onClick={openModal}
              className="uppercase text-neutral-200 hover:text-neutral-50 font-semibold text-sm h-full w-full transition-all hover:bg-[#007cba] bg-opacity-100"
            >
              Quick View
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <div className="uppercase text-[11px] my-1 text-neutral-400 font-semibold">
              {category}
            </div>
            <div className="text-sm text-neutral-800">
              <Link to={"product/" + slug}>{name}</Link>
            </div>
          </div>
          <div className="text-sm text-neutral-900 font-semibold">
            <span>{price}</span>
            <span className="">₫</span>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <div className="w-1/2">
                      <img
                        className="w-full max-w-full"
                        src={imageUrl}
                        alt={name}
                      />
                    </div>
                    <div className="w-1/2 p-8">
                      <div className="text-2xl font-bold text-neutral-900 mb-2">
                        <Link to={"product/" + slug}>{name}</Link>
                      </div>

                      <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

                      <div className="text-xl text-neutral-900 font-bold mb-2">
                        <span>{price}</span>
                        <span className="">₫</span>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{ __html: shortDescription }}
                      ></div>

                      <div className="mt-6 flex gap-4">
                        <QuantityInput />

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
                          {category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
