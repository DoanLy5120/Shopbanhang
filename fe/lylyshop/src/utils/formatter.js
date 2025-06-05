export const formatter = (value) => {
  return value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};