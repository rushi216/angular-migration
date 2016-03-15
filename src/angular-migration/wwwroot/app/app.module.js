angular.module('phonecatApp', [
    'ngRoute',
    'phonecat.core',
    'phonecat.phoneList',
    'phonecat.phoneDetail'
]);

angular.module('phonecatApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/phones', {
            template: '<phone-list><phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<phone-detail><phone-detail>'
        }).
        otherwise({
            redirectTo: '/phones'
        })
}]);