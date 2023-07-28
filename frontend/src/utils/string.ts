export const convertIdr = (number: number) => {
  number = number || 0;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
