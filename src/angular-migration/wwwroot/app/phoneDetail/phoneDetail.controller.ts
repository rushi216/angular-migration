interface PhoneRouteParams {
    phoneId: string
}

class PhoneDetailController {
    phone: any;
    mainImageUrl: string;
    constructor($routeParams: PhoneRouteParams, Phone) {
        this.phone = Phone.get({ phoneId: $routeParams.phoneId }).then((phone) => {
            this.mainImageUrl = phone.images[0];
        });
    }
    setImage(url: string) {
        this.mainImageUrl = url;
    }
}

PhoneDetailController.$inject = ['$routeParams', 'Phone'];

export default PhoneDetailController;