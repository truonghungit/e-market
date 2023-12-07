export const formatNumber = (num) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });

  return formatter.format(num);
};
