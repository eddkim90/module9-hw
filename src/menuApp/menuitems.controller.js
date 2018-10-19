(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['categories'];
    function MenuItemsController(categories) {
        var menuItems = this;
        console.log("Categories:" + categories);
        // console.log($stateParams.itemId);
        // console.log(categories[$stateParams.itemId]);
    }

})();