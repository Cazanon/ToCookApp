angular.module('services', ['ngResource'])

.factory('Recipe', function ($resource) {
    return $resource('https://tocook-nodeserver.herokuapp.com/recipes/:recipeId');
	//return $resource('10.55.158.193:5000/recipes/:recipeId');
})

.factory('RecipesCategory', function($resource) {	
	return $resource('https://tocook-nodeserver.herokuapp.com/recipes/category/:category', {
		category: '@category'
		},{
			'query': {
				method: 'GET',
				isArray: true
			}
		}
	);
})

.factory('Category', function ($resource) {
    return $resource('https://tocook-nodeserver.herokuapp.com/recipes/categories');
})

.factory('RecipesFavourite', function($resource) {	
	return $resource('https://tocook-nodeserver.herokuapp.com/recipes/favourite/:favList', {
		category: '@favourite'
		},{
			'query': {
				method: 'GET',
				isArray: true
			}
		}
	);
})

.factory('Favourite', function ($resource) {
    return $resource('https://tocook-nodeserver.herokuapp.com/recipes/favourites');
});
