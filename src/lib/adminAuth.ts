const ADMIN_KEY = "hoisach2025-admin-key";
const VALID_ACCESS_KEY = "4eCk2v1g3n7u1fasdf8asd1sd324a2b3c4d5e6f7g8h9i0j";

export const setAdminKey = (key: string): boolean => {
  if (typeof window === "undefined") return false;
  
  if (key === VALID_ACCESS_KEY) {
    localStorage.setItem(ADMIN_KEY, key);
    return true;
  }
  return false;
};

export const checkAdminAccess = (): boolean => {
  if (typeof window === "undefined") return false;
  
  const storedKey = localStorage.getItem(ADMIN_KEY);
  return storedKey === VALID_ACCESS_KEY;
};

export const clearAdminAccess = (): void => {
  if (typeof window === "undefined") return;
  
  localStorage.removeItem(ADMIN_KEY);
};
