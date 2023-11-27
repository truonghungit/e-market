import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../../components/product-item";
import { useGetProductsByCategory } from "../../queries/products.query";
import Select from "react-select";

export const ShopPage = () => {
  const [category, setCategory] = useState("all");
  const { data: products } = useGetProductsByCategory({
    category: category,
    pageSize: 4,
  });

  const options = [
    { label: "Thứ tự mặc định", value: "menu_order" },
    { label: "Thứ tự theo mức độ phổ biến", value: "popularity" },
    { label: "Thứ tự theo điểm đánh giá", value: "rating" },
    { label: "Mới nhất", value: "newest" },
    { label: "Thứ tự theo giá: thấp đến cao", value: "price" },
    { label: "Thứ tự theo giá: cao đến thấp", value: "price-desc" },
  ];

  const [selectedFilter, setSelectedFilter] = useState();

  const handleChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="flex justify-between">
          <div className="uppercase mb-2 text-lg">
            <Link to="/">trang chủ</Link>
            <span> / </span>
            <span className="font-bold">shop</span>
          </div>
          <div className="flex items-center">
            <span>Hiển thị tất cả 12 kết quả</span>
            <div className="ml-3 w-64">
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
        <div className="flex pt-7">
          <div className="w-3/12 pr-3">
            <div className="mb-5">
              <div className="uppercase font-bold text-[#777]">Browse</div>
              <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>
              <ul className="divide-y divide-[#777]">
                <li>
                  <Link
                    href="#"
                    className="py-1.5 inline-block font-bold uppercase"
                  >
                    BỘ MÁY CHƠI GAME
                  </Link>
                </li>
                <li>
                  <Link href="#" className="py-1.5 inline-block uppercase">
                    MÀN HÌNH MÁY TÍNH
                  </Link>
                </li>
                <li>
                  <Link href="#" className="py-1.5 inline-block uppercase">
                    PC VĂN PHÒNG - GAME NHẸ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase font-bold text-[#777]">
                Lọc theo giá
              </div>

              <div className="mt-3 mb-4 h-[3px] w-8 bg-neutral-200"></div>

              <input
                type="range"
                className="transparent h-1.5 w-56 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                min="0"
                max="100000"
                id="customRange2"
              />
            </div>
          </div>
          <div className="w-9/12">
            <div>
              {products && (
                <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
                  {products.map((product) => (
                    <ProductItem {...product} key={product.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
