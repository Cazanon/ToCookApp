//var server = "http://192.168.1.238:5000";
var server = "https://tocook-nodeserver.herokuapp.com";
//var server = "http://10.55.158.193:5000";
angular.module('services', ['ngResource'])

.service('Recipe', function ($http) {
	
	this.getRecipes = function() {
		return $http.get(server + '/recipes');
	}
	
	this.getRecipe = function(recipeId) {
		return $http.get(server + '/recipes/' + recipeId);
	}
	
})

.factory('Category', function ($resource) {
    return $resource(server + '/recipes/categories');
})

.factory('RecipesCategory', function($resource) {	
	return $resource(server + '/recipes/category/:category', {
		category: '@category'
		},{
			'query': {
				method: 'GET',
				isArray: true
			}
		}
	);
})

.factory('Favourite', function ($resource) {
    return $resource(server + '/recipes/favourites');
})

.factory('RecipesFavourite', function($resource) {	
	return $resource(server + '/recipes/favourite/:favList', {
		category: '@favourite'
		},{
			'query': {
				method: 'GET',
				isArray: true
			}
		}
	);
});