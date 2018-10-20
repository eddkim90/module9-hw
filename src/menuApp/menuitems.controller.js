(function() {
    'use strict';

    angular.module('data')
        .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['MenuDataService', '$stateParams', 'categories'];
    function MenuItemsController(MenuDataService, $stateParams, categories) {
        var menuItems = this;
        var categoryName = categories[$stateParams.itemId].short_name;
        MenuDataService.getItemsForCategory(categoryName)
            .then(function (response) {
                menuItems.name = response.category.name;
                console.log(response);
                menuItems.menuItems = response.menu_items;
            })
    }

})();