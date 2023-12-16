import { useQuery } from "@tanstack/react-query";
import {
  getNewProducts,
  getProductsByCategory,
  getSimilarProducts,
  getProductDetail,
} from "../repositories/products.repository";

export const useGetProductsByCategory = ({ category, keyWord, pageSize }) => {
  return useQuery({
    queryKey: ["products", category, pageSize],
    queryFn: () => getProductsByCategory({ category, keyWord, pageSize }),
  });
};

export const useGetSimilarProducts = ({ productId, pageSize }) => {
  return useQuery({
    queryKey: ["products", productId, pageSize],
    queryFn: () => {
      return getSimilarProducts({ productId, pageSize });
    },
  });
};

export const useGetProductDetail = ({ slug }) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => {
      return getProductDetail({ slug });
    },
  });
};

export const useGetNewProducts = ({ pageSize }) => {
  return useQuery({
    queryKey: ["products", pageSize],
    queryFn: () => getNewProducts({ pageSize }),
  });
};
