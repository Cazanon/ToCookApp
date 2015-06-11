angular.module('services', ['ngResource'])

.factory('Recipe', function ($resource) {
    return $resource('https://tocook-nodeserver.herokuapp.com/recipes/:recipeId');
});
