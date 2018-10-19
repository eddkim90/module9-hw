(function() {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to the home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up the UI States
        $stateProvider

        // Home Page
        .state('home', {
            url: '/',
            templateUrl: 'src/menuApp/templates/home.template.html'
        })

        // Menu Categories
        .state('menuCategories', {
            url: '/categories',
            templateUrl: 'src/menuApp/templates/categories.template.html',
            controller: 'MenuCategoriesController as menuCategories',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Menu Items
        .state('menuCategories.menuItems', {
            url: '/items/{itemId}',
            templateUrl: 'src/menuApp/templates/items.template.html',
            controller: 'MenuItemsController as menuItems'
        })

    }


})();