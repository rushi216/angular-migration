import core from './core/core.module';
import phoneList from './phoneList/phoneList.module';
import phoneDetail from './phoneDetail/phoneDetail.module';

angular.module('phonecatApp', [
    'ngRoute',
    core.name,
    phoneList.name,
    phoneDetail.name
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: 'app/phoneList/phoneList.html',
            controller: 'phoneListController',
            controllerAs: '$ctrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'app/phoneDetail/phoneDetail.html',
            controller: 'phoneDetailController',
            controllerAs: '$ctrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}

angular.bootstrap(document.documentElement, ['phonecatApp']);