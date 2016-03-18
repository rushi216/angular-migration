import {Component} from 'angular2/core';
import {Phone, Phones} from '../core/phones.service';

@Component({
    selector: 'pc-phone-list',
    templateUrl: 'app/phoneList/phoneList.html'
})

class PhoneList {
    phones: any[];
    orderProp: string;
    query: string;
    constructor(phones: Phones) {
        phones.getPhones().then((phones) => {
            this.phones = phones
        });

        this.orderProp = 'age';
    }
}


export default PhoneList;