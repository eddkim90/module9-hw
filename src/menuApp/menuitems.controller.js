(function() {
    'use strict';

    angular.module('data')
        .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['items'];
    function MenuItemsController(items) {
        var $ctrl = this;
        console.log(items.menu_items);
        $ctrl.shortname = items.category.short_name;
        $ctrl.name = items.category.name;
        $ctrl.items = items.menu_items;
    }

})();