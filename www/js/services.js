angular.module('services', ['ngResource'])

.factory('Recipe', function ($resource) {
    return $resource('http://192.168.1.238:5000/recipes/:recipeId');
});
