import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Домашние сырники',
    description: 'Классические сырники из творога',
    ingredients: [
      '500г творога',
      '2 яйца',
      '3 ст.л. муки',
      '2 ст.л. сахара',
      'щепотка соли'
    ],
    instructions: [
      'Смешать творог с яйцами',
      'Добавить муку и сахар',
      'Сформировать сырники',
      'Жарить на сковороде до золотистой корочки'
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg',
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Молочный коктейль',
    description: 'Освежающий коктейль с фруктами',
    ingredients: [
      '200мл молока',
      '1 банан',
      '100г клубники',
      '1 ст.л. меда'
    ],
    instructions: [
      'Нарезать фрукты',
      'Смешать все ингредиенты в блендере',
      'Взбить до однородности',
      'Подавать охлажденным'
    ],
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    difficulty: 'easy'
  }
];