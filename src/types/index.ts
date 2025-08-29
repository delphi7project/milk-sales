export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  weight?: string;
  fatContent?: string;
  expiryDate?: string;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  deliveryInfo: DeliveryInfo;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  postalCode: string;
  deliveryTime: string;
  notes?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: Date;
  author: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
}