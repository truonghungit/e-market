import { useGetProductsByCategory } from "../../queries/products.query";
import { ProductItem } from "../../components/product-item";

export const GamingPCPage = () => {
  const { data: gamingPCList } = useGetProductsByCategory({
    category: "gaming",
    pageSize: 4,
  });
  return (
    <div className="py-8">
      {gamingPCList && (
        <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
          {gamingPCList.map((product) => (
            <ProductItem {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
