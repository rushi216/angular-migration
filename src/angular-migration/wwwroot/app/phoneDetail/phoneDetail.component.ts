import {Component, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Phones, Phone} from '../core/phones.service';

@Component({
    selector: 'pc-phone-detail',
    templateUrl: 'app/phoneDetail/phoneDetail.html'
})


class PhoneDetail {
    phone: any;
    mainImageUrl: string;
    constructor(params: RouteParams, phones: Phones) {
        phones.getPhone({ phoneId: params.get("phoneId") }).then((phone) => {
            this.phone = phone;
            this.mainImageUrl = phone.images[0];
        });
    }
    setImage(url: string) {
        this.mainImageUrl = url;
    }
}

export default PhoneDetail;