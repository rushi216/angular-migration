import core from './core/core.module';
import phoneList from './phoneList/phoneList.module';
import phoneDetail from './phoneDetail/phoneDetail.module';

import upgradeAdapter from './core/upgradeAdapter';
import {HTTP_PROVIDERS} from 'angular2/http';

upgradeAdapter.addProvider(HTTP_PROVIDERS);

upgradeAdapter.upgradeNg1Provider('$routeParams');

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
            template: '<pc-phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<pc-phone-detail>'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);