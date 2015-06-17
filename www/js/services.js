angular.module('services', ['ngResource'])

.factory('Recipe', function ($resource) {
    return $resource('https://tocook-nodeserver.herokuapp.com/recipes/:recipeId');
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
});
