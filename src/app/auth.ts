// This file is kept for compatibility but is no longer used.
// We're using browser localStorage for authentication instead of NextAuth.

export const auth = {
  // Dummy function that does nothing
  auth: () => {
    return { user: null };
  }
};