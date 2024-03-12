const ACCESS_TOKEN = "ACCESS_TOKEN";

export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const clearToken = () => localStorage.removeItem(ACCESS_TOKEN);

const ACCESS_TOKEN_MERCHANT = "ACCESS_TOKEN_MERCHANT";

export const setTokenMerchant = (token) =>
  localStorage.setItem(ACCESS_TOKEN_MERCHANT, token);
export const getTokenMerchant = () =>
  localStorage.getItem(ACCESS_TOKEN_MERCHANT);
export const clearTokenMerchant = () =>
  localStorage.removeItem(ACCESS_TOKEN_MERCHANT);
