// Add mongoDB
// CSS
// Lista Favoritos
 

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter',['ionic', 'controllers'])

.run(function($ionicPlatform){
	$ionicPlatform.ready(function() {
	    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    // for form inputs)
	    if(window.cordova && window.cordova.plugins.Keyboard){
	    	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    }
	    if(window.StatusBar){
	    	// org.apache.cordova.statusbar required
	    	StatusBar.styleDefault();
	    }
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	.state('app',{
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})
 
    .state('app.recipes',{
    	url: "/recipes",
    	views: {
    		'menuContent': {
    			templateUrl: "templates/recipes.html",
    			controller: 'RecipesCtrl'
    		}
    	}
    })

    .state('app.category', {
    	url: "/category/:category",
    	views: {
    		'menuContent': {
    			templateUrl: "templates/recipes.html",
    			controller: 'RecipesCategoryCtrl'
    		}
    	}
    })
  
	.state('app.recipe', {
		url: "/:recipeId",
		views: {
			'menuContent': {
				templateUrl: "templates/recipe.html",
				controller: 'RecipeCtrl'
			}
		}
	})
	
	.state('app.favourite', {
		url: "/favourite/:favList",
		views: {
			'menuContent': {
				templateUrl: "templates/recipes.html",
				controller: 'RecipesFavouriteCtrl'
			}
		}
	});
  
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/recipes');
	
});
