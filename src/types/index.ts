export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  capacity?: string;
  material: string;
  dimensions?: string;
  colors?: string[];
  image: string;
  catalogImage?: string;
  featured?: boolean;
  code?: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  description?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}
