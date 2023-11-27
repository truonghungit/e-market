import { useQuery } from "@tanstack/react-query";
import {
  getNewProducts,
  getProductsByCategory,
} from "../repositories/products.repository";

export const useGetProductsByCategory = ({ category, pageSize }) => {
  return useQuery({
    queryKey: ["products", category, pageSize],
    queryFn: () => getProductsByCategory({ category, pageSize }),
  });
};

export const useGetNewProducts = ({ pageSize }) => {
  return useQuery({
    queryKey: ["products", pageSize],
    queryFn: () => getNewProducts({ pageSize }),
  });
};
