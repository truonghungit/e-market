import { useGetProductsByCategory } from "../../queries/products.query";
import { ProductItem } from "../../components/product-item";

export const OfficePCPage = () => {
  const { data: officePCList } = useGetProductsByCategory({
    category: "office",
    pageSize: 4,
  });
  return (
    <div className="py-8">
      {officePCList && (
        <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
          {officePCList.map((product) => (
            <ProductItem {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
