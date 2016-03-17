interface PhoneRouteParams {
    phoneId: string
}

class PhoneDetailController {
    phone: any;
    mainImageUrl: string;
    constructor($routeParams: PhoneRouteParams, Phone) {
        Phone.getPhone({ phoneId: $routeParams.phoneId }).then((phone) => {
            this.phone = phone;
            this.mainImageUrl = phone.images[0];
        });
    }
    setImage(url: string) {
        this.mainImageUrl = url;
    }
}

PhoneDetailController.$inject = ['$routeParams', 'Phone'];

export default PhoneDetailController;