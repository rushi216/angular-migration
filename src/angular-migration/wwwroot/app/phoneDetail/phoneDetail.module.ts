import PhoneDetailController from './phoneDetail.controller';

export default angular.module('phonecat.phoneDetail', [
    'ngRoute',
    'phonecat.core'
]).controller('phoneDetailController', PhoneDetailController);