import { useGetProductsByCategory } from "../../queries/products.query";
import { ProductItem } from "../../components/product-item";

export const MonitorsPage = () => {
  const { data: monitorPCList } = useGetProductsByCategory({
    category: "monitor",
    pageSize: 4,
  });
  return (
    <div className="py-8">
      {monitorPCList && (
        <div className="grid auto-rows-auto grid-cols-4 gap-x-5 gap-y-8">
          {monitorPCList.map((product) => (
            <ProductItem {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
