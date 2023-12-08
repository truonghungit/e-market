import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import Select from "react-select";

import { useShoppingCart } from "../../shopping-cart";
import { formatNumber } from "../../utils/format";
import { ProductItem } from "../../components/product-item";
import { useGetProductsByCategory } from "../../queries/products.query";
import { ProductCategories } from "./categories";

export const ShopPage = () => {
  const { category } = useParams();
  const [priceFilter, setPriceFilter] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [prices, setPrices] = useState([0, maxPrice]);
  const { addProduct } = useShoppingCart();

  const { data: products } = useGetProductsByCategory({
    category: category ?? "all",
    pageSize: 4,
  });

  useEffect(() => {
    if (products) {
      const prices = [...(products ?? [])].map((item) => item.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPrices([min, max]);
      setMinPrice(min);
      setMaxPrice(max);
    }
  }, [products]);

  const [selectedFilter, setSelectedFilter] = useState();

  const handleChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  const onPricesFilterChange = (value) => {
    setPrices(value);
  };

  const applyFilter = () => {
    const [min, max] = prices;
    setPriceFilter({ min, max });
  };

  const removePriceFilter = (field) => {
    debugger;
    const newPriceFilter = { ...priceFilter };
    delete newPriceFilter[field];

    setPriceFilter(newPriceFilter);
  };

  const options = [
    { label: "Thứ tự mặc định", value: "menu_order" },
    { label: "Thứ tự theo mức độ phổ biến", value: "popularity" },
    { label: "Thứ tự theo điểm đánh giá", value: "rating" },
    { label: "Mới nhất", value: "newest" },
    { label: "Thứ tự theo giá: thấp đến cao", value: "price" },
    { label: "Thứ tự theo giá: cao đến thấp", value: "price-desc" },
  ];

  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="uppercase mb-2 text-lg">
            <Link to="/">trang chủ</Link>
            <span> / </span>
            <span className="font-bold">shop</span>
          </div>
          <div className="flex items-center">
            <span className="hidden xl:inline-block mr-3">
              Hiển thị tất cả {products?.length} kết quả
            </span>
            <div className=" w-64">
              <Select
                value={selectedFilter}
                onChange={handleChange}
                options={options}
                isSearchable="false"
                defaultValue={{
                  label: "Thứ tự theo điểm đánh giá",
                  value: "menu_order",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row pt-7">
          <div className="w-full xl:w-3/12 pr-3">
            {((priceFilter.min !== null && priceFilter.min !== undefined) ||
              (priceFilter.max !== null && priceFilter.max !== undefined)) && (
              <div className="mb-4">
                <div className="uppercase font-bold text-[#777]">
                  <div>Active filters</div>
                </div>
                <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

                {priceFilter.min !== null && priceFilter.min !== undefined && (
                  <div>
                    <div
                      onClick={() => removePriceFilter("min")}
                      className="inline-block bg-[#f1f1f1] cursor-pointer px-2 border border-[rgba(0,0,0,.1)] rounded-full text-[13.6px]"
                    >
                      <span>x Nhỏ nhất: </span>
                      <span className="text-[#111] font-bold">
                        {formatNumber(priceFilter.min)}
                      </span>
                    </div>
                  </div>
                )}

                {priceFilter.max !== null && priceFilter.max !== undefined && (
                  <div>
                    <div
                      onClick={() => removePriceFilter("max")}
                      className="inline-block bg-[#f1f1f1] cursor-pointer px-2 border border-[rgba(0,0,0,.1)] rounded-full text-[13.6px] mt-1"
                    >
                      <span>x Lớn nhất: </span>
                      <span className="text-[#111] font-bold">
                        {formatNumber(priceFilter.max)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            <ProductCategories />
            <div>
              <div className="uppercase font-bold text-[#777]">
                Lọc theo giá
              </div>

              <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

              <div>
                <RangeSlider
                  min={minPrice}
                  max={maxPrice}
                  step={100}
                  value={prices}
                  onInput={onPricesFilterChange}
                />
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => applyFilter()}
                    className="text-white uppercase bg-gray-700 hover:bg-gray-800 font-medium rounded-full text-xs px-5 py-2 me-2 mb-2"
                  >
                    Lọc
                  </button>

                  <div className="text-right text-sm">
                    <span>Giá </span>
                    <span className="text-[#111] font-bold">
                      {formatNumber(prices[0])}
                    </span>
                    <span> - </span>
                    <span className="text-[#111] font-bold">
                      {formatNumber(prices[1])}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-9/12">
            <div>
              {products && (
                <div className="grid auto-rows-auto grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8">
                  {products.map((product) => (
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
          <div></div>
        </div>
      </div>
    </div>
  );
};
