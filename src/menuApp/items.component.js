(function() {
    'use strict';

    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/menuApp/templates/itemsDisplay.template.html',
            bindings: {
                items: '<'
            }
        })

})();