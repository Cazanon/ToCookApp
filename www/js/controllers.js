angular.module('controllers', ['services'])

.controller('AppCtrl', function($scope, Category, Favourite) {
	$scope.categories = Category.query();
	$scope.favourites = Favourite.query();
	//$scope.server = "http://192.168.1.238:5000";
	$scope.server = "https://tocook-nodeserver.herokuapp.com";
	//$scope.server = "http://10.55.158.193:5000";
})

.controller('RecipesCtrl', function($scope, Recipe) {
	Recipe.getRecipes().success(function(data){ 
		$scope.recipes = data;
	});
	$scope.category = "Recetas";
})

.controller('RecipeCtrl', function($scope, $stateParams, Recipe) {
	Recipe.getRecipe($stateParams.recipeId).success(function(data){ 
		$scope.recipe = data;
	});
})

.controller('RecipesCategoryCtrl', function($scope, $stateParams, RecipesCategory) {
	$scope.recipes = RecipesCategory.query({
		category: $stateParams.category		
	});
	$scope.category = $stateParams.category;
})

.controller('RecipesFavouriteCtrl', function($scope, $stateParams, RecipesFavourite) {
	$scope.recipes = RecipesFavourite.query({
		favList: $stateParams.favList
	});
})

.controller('ListCtrl', function($scope) {		
	$scope.toggleGroup = function(step) {
	    if ($scope.isGroupShown(step)) {
	    	$scope.shownGroup = null;
	    } else {
	    	$scope.shownGroup = step;
	    }
	};	
	$scope.isGroupShown = function(step) {
		return $scope.shownGroup === step;
	};
});