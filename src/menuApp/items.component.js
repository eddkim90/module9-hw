(function() {
    'use strict';

    angular.module('MenuApp')
        .component('itemsList', {
            templateUrl: 'src/menuApp/templates/itemsdisplay.template.html',
            bindings: {
                item: '<'
            }
        });

})();