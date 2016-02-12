(function () {
    'use strict';

    angular
        .module('ldTable')
        .directive('ldTable', ldTable);

    function ldTable () {
        
        return {
            restrict: 'AE',
            scope: {
                data: '=',
                onEditBtnClicked: '=',
            },
            controller: function ($scope, $filter, ldTableService) {

                var vm = $scope;

                vm.order = [];
                vm.format = format;

                vm.customOptions = vm.data.attrs || {}; 

                vm.options = ldTableService.getDefaultOptions();

                $scope.$watch('customOptions', function (newValue, oldValue) {
                    if (newValue) {
                        vm.options = angular.extend({}, vm.options, vm.customOptions);
                    }
                });

                $scope.$watch('data.cols', function (newValue, oldValue) {
                    if (newValue) {
                        newValue.forEach(function (col) {
                            vm.order.push(col);
                        });
                    }
                });

                function format (obj, col) {
                    var prop = obj[col.field];
                    var filter = getFilterForColumn(col);
                    var formated = filter ? $filter(filter.type)(prop, filter.format) : prop;
                    return formated;
                }

                function getFilterForColumn (col) {
                    var filterType = col.type || vm.options.defaultFilter;
                    if (filterType) {
                        var filter = vm.options.filters[filterType];
                        var filterFormat = col.format || filter ? filter.format : '';
                        return {
                            type: filterType,
                            format: filterFormat
                        };
                    }
                    return null;
                }

            },
            templateUrl: './ldTable.html'
        };
    }

})();
