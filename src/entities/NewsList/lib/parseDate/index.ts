export const parseDate = (time: number): string => {
  const timestamp: number = time * 1000; // Преобразуем секунды в миллисекунды
  const date: string = new Date(timestamp).toLocaleString();
  return date;
};
