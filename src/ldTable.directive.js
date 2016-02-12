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
            controller: function ($scope, $filter) {

                var vm = $scope;

                vm.defaultOptions = {
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

                vm.order = [];
                vm.format = format;
                vm.options = vm.data.attrs || {};

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
                    var filterType = col.type || vm.options.defaultFilter || vm.defaultOptions.defaultFilter;
                    if (filterType) {
                        var filter = vm.options.filters ? vm.options.filters[filterType] : vm.defaultOptions.filters[filterType];
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
