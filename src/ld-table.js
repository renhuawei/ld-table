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
            },
            controller: function ($scope, $filter) {

                var vm = $scope;

                var defaultOptions = {
                    itemsByPage: 10,
                    displayedPages: 10,
                    tableClasses: 'table table-striped'
                };

                vm.order = [];
                vm.parse = parse;
                vm.options = {};

                defineProperties();

                $scope.$watch('data.cols', function (newValue, oldValue) {
                    if (newValue) {
                        newValue.forEach(function (col) {
                            vm.order.push(col);
                        });
                    }
                });

                $scope.$watch('data.attrs', function (newValue, oldValue) {
                    if (newValue) {
                        for (var property in newValue) {
                            vm.options[property] = newValue[property] || vm.options[property];
                        }
                    }
                });

                function defineProperties () {
                    for (var property in defaultOptions) {
                        vm.options[property] = defaultOptions[property];
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
