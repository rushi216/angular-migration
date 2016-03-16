class PhoneListController {
    phones: any[];
    orderProp: string;
    query: string;
    constructor(Phone) {
        Phone.getPhones().then((phones) => {
            this.phones = phones
        });

        this.orderProp = 'age';
    }
}

PhoneListController.$inject = ['Phone'];

export default PhoneListController;