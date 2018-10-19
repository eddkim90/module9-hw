(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menuApp/templates/categoriesDisplay.template.html',
            bindings: {
                categories: '<'
            }
        });

})();