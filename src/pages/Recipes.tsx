import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, ChefHat, Search } from 'lucide-react';
import { recipes } from '@/data/recipes';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (difficultyFilter === 'all' || recipe.difficulty === difficultyFilter)
  );

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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Рецепты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Вдохновляющие рецепты с использованием наших свежих молочных продуктов
          </p>
        </section>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск рецептов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Сложность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая сложность</SelectItem>
                <SelectItem value="easy">Легко</SelectItem>
                <SelectItem value="medium">Средне</SelectItem>
                <SelectItem value="hard">Сложно</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <ChefHat className="w-4 h-4 mr-2" />
              Категории
            </Button>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
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

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600">Рецепты не найдены</p>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Recipe Tips */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Полезные советы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥛</span>
                </div>
                <h3 className="font-semibold mb-2">Выбор молока</h3>
                <p className="text-sm text-gray-600">
                  Для выпечки лучше использовать молоко жирностью 3.2%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧀</span>
                </div>
                <h3 className="font-semibold mb-2">Работа с творогом</h3>
                <p className="text-sm text-gray-600">
                  Протирайте творог через сито для получения нежной текстуры
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥄</span>
                </div>
                <h3 className="font-semibold mb-2">Использование сметаны</h3>
                <p className="text-sm text-gray-600">
                  Добавляйте сметану в конце приготовления, чтобы она не свернулась
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recipes;