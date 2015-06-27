angular.module('myApp',[])
.controller('AppCtrl',function($scope) {
	$scope.datepickerOptions = {'format': 'yyyy-mm-dd',
    'language': 'en',
    'autoclose': true,
    'weekStart': 0};

    $scope.date = '2000-03-12';
})
.directive('calendar', function () {
            return {
                require: 'ngModel',
                link: function (scope, el, attr, ngModel) {
                    $(el).datepicker({
                        dateFormat: 'yy-mm-dd',
                        onSelect: function (dateText) {
                            scope.$apply(function () {
                                ngModel.$setViewValue(dateText);
                                $('.datepicker').hide();
                            });
                        }
                    });
                }
            };
        })