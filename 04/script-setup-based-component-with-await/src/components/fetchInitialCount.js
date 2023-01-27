export const fetchInitialCount = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
};
