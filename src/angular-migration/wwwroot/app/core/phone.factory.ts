class Phone {

    phoneResource: any;

    constructor($resource) {
        this.phoneResource = $resource('phones/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }
    
    getPhone(phone) {
        return this.phoneResource.get(phone).$promise;
    }

    getPhones() {
        return this.phoneResource.query().$promise;
    }
}

Phone.$inject = ['$resource'];

export default Phone;