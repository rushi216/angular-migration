PhoneListController.$inject = ['Phone'];

function PhoneListController(Phone) {
    var vm = this;
    vm.phones = Phone.query();
    vm.orderProp = 'age';
}

export default PhoneListController;