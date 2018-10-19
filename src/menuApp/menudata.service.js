(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var mdService = this;

        var categories = [];
        var items = [];

        // Get all of the categories
        mdService.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function(result) {
                categories = result.data;
                return categories;
            })
        };

        // Get Menu Items from the Category
        mdService.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: categoryShortName
            }).then(function(result) {
                items = result.data;
                return items;
            })
        }
    }

})();