export const parseDate = (time: number): string => {
  const timestamp: number = time * 1000;
  const date: string = new Date(timestamp).toLocaleDateString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return date;
};
