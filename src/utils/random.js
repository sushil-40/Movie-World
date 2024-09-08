export const randomChar = () => {
  const str = "qwertyuiopasdfghjkzxcvbnm";

  return str[Math.floor(Math.random() * str.length)];
};
