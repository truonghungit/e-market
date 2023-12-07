import appConfig from "../../configs";

import { useShoppingCart } from "../../shopping-cart";
import { ProductItem } from "../../components/product-item";
import {
  useGetProductsByCategory,
  useGetNewProducts,
} from "../../queries/products.query";

const headerImages = [
  "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/banner1-2-1400x788.png",
  "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/banner2-1400x788.jpg",
  "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/banner3-1400x788.png",
  "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/banner3-1400x788.png",
];

const SectionTitle = ({ title }) => {
  return (
    <h3 className="text-center flex flex-row justify-between items-center">
      <span className="h-0.5 block grow bg-neutral-300"></span>
      <span className="uppercase shrink-0 font-bold text-lg block mx-5">
        {title}
      </span>
      <span className="h-0.5 block grow bg-neutral-300"></span>
    </h3>
  );
};

export const HomePage = () => {
  const { addProduct } = useShoppingCart();

  const { data: listPCForGaming } = useGetProductsByCategory({
    category: "bo-may-tinh-choi-game",
    pageSize: 4,
  });

  const { data: listPCForOffice } = useGetProductsByCategory({
    category: "pc-van-phong-game-nhe",
    pageSize: 4,
  });

  const { data: monitors } = useGetProductsByCategory({
    category: "man-hinh-may-tinh",
    pageSize: 4,
  });

  const { data: newProducts } = useGetNewProducts({ pageSize: 8 });

  return (
    <div className="py-8">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {headerImages.map((image, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "col-span-1 lg:col-span-3 h-auto lg:h-[432px] overflow-hidden"
                    : ""
                }
              >
                <img className="" src={image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <section className="py-8">
          <h4 className="font-bold uppercase mb-2">{appConfig.company.name}</h4>

          <div className="text-neutral-500">
            <div>Dịa chỉ: {appConfig.company.address}</div>
            <div>Điện thoại: {appConfig.company.phoneNumber}</div>
            <div>Mã số doanh nghiệp: {appConfig.company.businessCode}</div>
            <div>Website: {appConfig.company.website}</div>
            <div>Email: {appConfig.company.email}</div>
          </div>
        </section>

        {listPCForGaming && (
          <section className="py-8">
            <SectionTitle title="Bộ máy tính chơi game" />
            <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
              {listPCForGaming.map((product) => (
                <ProductItem
                  {...product}
                  key={product.id}
                  onAddToCart={(quantity) => addProduct({ quantity, product })}
                />
              ))}
            </div>
          </section>
        )}

        {listPCForOffice && (
          <section className="py-8">
            <SectionTitle title="PC Văn phòng" />
            <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
              {listPCForOffice.map((product) => (
                <ProductItem
                  {...product}
                  key={product.id}
                  onAddToCart={(quantity) => addProduct({ quantity, product })}
                />
              ))}
            </div>
          </section>
        )}

        {monitors && (
          <section className="py-8">
            <SectionTitle title="Màn hình máy tính" />
            <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
              {monitors.map((product) => (
                <ProductItem
                  {...product}
                  key={product.id}
                  onAddToCart={(quantity) => addProduct({ quantity, product })}
                />
              ))}
            </div>
          </section>
        )}

        {newProducts && (
          <section className="py-8">
            <SectionTitle title="Sản phầm mới nhất" />
            <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
              {newProducts.map((product) => (
                <ProductItem
                  {...product}
                  key={product.id}
                  onAddToCart={(quantity) => addProduct({ quantity, product })}
                />
              ))}
            </div>
          </section>
        )}

        <div className="mb-10"></div>
      </div>
    </div>
  );
};
