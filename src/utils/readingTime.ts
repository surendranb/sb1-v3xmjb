const WORDS_PER_MINUTE = 200;

export const calculateReadingTime = (content: string): string => {
  const wordCount = content.split(/\s+/g).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return `${minutes} min read`;
};