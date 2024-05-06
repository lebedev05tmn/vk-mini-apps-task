export const parseHtml = (html: string) => {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(html, "text/html");
  return parsedHtml.body.textContent || html || "";
};
