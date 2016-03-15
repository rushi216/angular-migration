angular.module('phonecat.phoneList').controller('phoneListController',
  ['Phone', function (Phone) {
      this.phones = Phone.query();
      this.orderProp = 'age';
  }]);