//angular.module('starter.controllers', [])
angular.module('controllers', ['services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Category) {
	//With the new view caching in Ionic, Controllers are only called
	//when they are recreated or on app start, instead of every page change.
	//To listen for when this page is active (for example, to refresh data),
	//listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {});
  
	//Form data for the login modal
	$scope.loginData = {};

	//Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	//Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	//Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	//Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);
		//Simulate a login delay. Remove this and replace with your login
		//code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
	
	$scope.categories = Category.query();
})

.controller('RecipesCtrl', function($scope, Recipe) {
	$scope.recipes = Recipe.query();
})

.controller('RecipeCtrl', function($scope, $stateParams, Recipe) {
    $scope.recipe = Recipe.get({recipeId: $stateParams.recipeId});
})

.controller('RecipesCategoryCtrl', function($scope, $stateParams, RecipesCategory) {
	$scope.recipes = RecipesCategory.query({
		category: $stateParams.category
	});
})

.controller('PlaylistsCtrl', function($scope) {
	$scope.steps = [];
	for (var i=0; i<5; i++) {
		$scope.steps[i] = {
			name: i,
			items: []
		};
	    for (var j=0; j<3; j++) {
	      $scope.steps[i].items.push(i + '-' + j);
	    }
	}
	
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