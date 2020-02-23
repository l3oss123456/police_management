export const setItemLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};
export const getItemLocalStorage = key => {
  return localStorage.getItem(key);
};
export const removeItemLocalStorage = key => {
  localStorage.removeItem(key);
};
export const clearItem = () => {
  localStorage.clear();
};
