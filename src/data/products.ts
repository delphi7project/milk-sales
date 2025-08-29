import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Молоко цельное 3.2%',
    description: 'Натуральное коровье молоко высшего качества',
    price: 89,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    category: 'milk',
    inStock: true,
    weight: '1л',
    fatContent: '3.2%',
    brand: 'Молочная ферма'
  },
  {
    id: '2',
    name: 'Творог домашний',
    description: 'Свежий творог из натурального молока',
    price: 159,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    category: 'cottage-cheese',
    inStock: true,
    weight: '400г',
    fatContent: '9%',
    brand: 'Молочная ферма'
  },
  {
    id: '3',
    name: 'Сметана густая',
    description: 'Натуральная сметана высокой жирности',
    price: 129,
    image: 'https://images.pexels.com/photos/6544364/pexels-photo-6544364.jpeg',
    category: 'sour-cream',
    inStock: true,
    weight: '300г',
    fatContent: '20%',
    brand: 'Молочная ферма'
  },
  {
    id: '4',
    name: 'Масло сливочное',
    description: 'Традиционное сливочное масло',
    price: 199,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    category: 'butter',
    inStock: true,
    weight: '200г',
    fatContent: '82.5%',
    brand: 'Молочная ферма'
  },
  {
    id: '5',
    name: 'Йогурт натуральный',
    description: 'Живой йогурт без добавок',
    price: 79,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    category: 'yogurt',
    inStock: true,
    weight: '250г',
    fatContent: '3.5%',
    brand: 'Молочная ферма'
  },
  {
    id: '6',
    name: 'Кефир 1%',
    description: 'Полезный кефир с низким содержанием жира',
    price: 69,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    category: 'kefir',
    inStock: true,
    weight: '500мл',
    fatContent: '1%',
    brand: 'Молочная ферма'
  }
];

export const categories = [
  { id: 'milk', name: 'Молоко', icon: '🥛' },
  { id: 'cottage-cheese', name: 'Творог', icon: '🧀' },
  { id: 'sour-cream', name: 'Сметана', icon: '🥄' },
  { id: 'butter', name: 'Масло', icon: '🧈' },
  { id: 'yogurt', name: 'Йогурт', icon: '🥛' },
  { id: 'kefir', name: 'Кефир', icon: '🥛' }
];