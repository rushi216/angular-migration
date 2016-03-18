﻿import {Component, Inject} from 'angular2/core';
import {Phones, Phone} from '../core/phones.service';

interface PhoneRouteParams {
    phoneId: string
}

@Component({
    selector: 'pc-phone-detail',
    templateUrl: 'app/phoneDetail/phoneDetail.html'
})


class PhoneDetail {
    phone: any;
    mainImageUrl: string;
    constructor( @Inject('$routeParams') $routeParams: PhoneRouteParams, phones: Phones) {
        phones.getPhone({ phoneId: $routeParams.phoneId }).then((phone) => {
            this.phone = phone;
            this.mainImageUrl = phone.images[0];
        });
    }
    setImage(url: string) {
        this.mainImageUrl = url;
    }
}

export default PhoneDetail;