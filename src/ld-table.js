(function () {
    'use strict';

    angular
        .module('ldTable', ['smart-table'])
        .directive('ldTable', ldTable);

    function ldTable () {
        return {
            restrict: 'AE',
            scope: {
                data: '=',
                onEditBtnClicked: '=',
                options: '='
            },
            controller: function ($scope, $filter) {

                var vm = $scope;

                var defaultOptions = {
                    itemsPerPage: 10,
                    displayedPages: 10,
                    tableClasses: 'table table-striped'
                };

                vm.order = [];
                vm.parse = parse;
                vm.config = {};

                defineProperties();

                $scope.$watch('data.cols', function (newValue, oldValue) {
                    if (newValue) {
                        newValue.forEach(function (col) {
                            vm.order.push(col);
                        });
                    }
                });


                function defineProperties () {
                    for (var property in vm.options) {
                        vm.config[property] = vm.options[property];
                    }
                    for (var property in defaultOptions) {
                        vm.config[property] = vm.config[property] || defaultOptions[property];
                    }
                }

                function parse (obj, col) {
                    var prop = obj[col.pred];
                    if (col.type) {
                        var filtered = $filter(col.type)(prop, col.format);
                        return filtered;
                    }
                    return prop;
                };
            },
            templateUrl: './ld-table.html'
        };
    }

})();
