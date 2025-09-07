// app/data/products/types.ts

export type Product = {
  id: string;
  name: string;
  brand: string;
  vitola?: string;   // cigars
  blend?: string;    // tobaccos
  price: number | string;
  image: string;
  category: string;
  badge?: string;
  status?: string;
  stockStatus?: string;
  dateAdded?: string;
  sales?: number;
  rating?: number;
};
