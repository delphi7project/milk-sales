import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';
import { recipes } from '@/data/recipes';

const RecipesSection = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return 'Неизвестно';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Рецепты с нашими продуктами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Вдохновляющие рецепты для создания вкусных блюд из молочных продуктов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <Badge className={`absolute top-3 right-3 ${getDifficultyColor(recipe.difficulty)}`}>
                  {getDifficultyText(recipe.difficulty)}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime + recipe.cookTime} мин</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} порций</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="w-4 h-4" />
                    <span>{recipe.ingredients.length} ингредиентов</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Link to={`/recipes/${recipe.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Посмотреть рецепт
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/recipes">
            <Button size="lg" variant="outline">
              Все рецепты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;