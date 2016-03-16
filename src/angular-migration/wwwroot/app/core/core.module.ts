import Phone from './phone.factory';

export default angular.module('phonecat.core',
    ['ngResource']).
    factory('Phone', Phone);