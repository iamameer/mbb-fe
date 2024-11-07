export type Book = {
  id: string;
  title: string;
  author: string;
  description?: string;
  price: number;
  tags?: string[];
  image?: string;
};