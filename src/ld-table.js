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
                onEditBtnClicked: '='
            },
            controller: function ($scope, $filter) {

                var vm = $scope;

                vm.rowlist = vm.data.rowlist;
                vm.order = [];
                vm.parse = parse;

                $scope.$watch('data.cols', function (newValue, oldValue) {
                    if (newValue) {
                        newValue.forEach(function (col) {
                            vm.order.push(col);
                        });
                    }
                });

                function parse (obj, col) {
                    var prop = obj[col.pred];
                    if (col.type) {
                        var filtered = $filter(col.type)(prop, col.format);
                        return filtered;
                    }
                    return prop;
                };
            },
            templateUrl: './src/ld-table.html'
        };
    }

})();
