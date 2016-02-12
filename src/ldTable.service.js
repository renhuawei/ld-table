(function () {
    'use strict';

    angular
        .module('ldTable')
        .service('ldTableService', ldTableService);

    function ldTableService () {

        var options = {
            itemsByPage: 10,
            displayedPages: 10,
            tableClasses: 'table table-striped',
            defaultFilter: '', // no filter
            filters: {
                date: {
                    format: 'MM/dd/yyyy',
                    align: 'right'
                },
                number: {
                    format: '0'
                }
            }
        };

        return {
            getDefaultOptions: function () {
                return options;
            }
        };
    }
})();
