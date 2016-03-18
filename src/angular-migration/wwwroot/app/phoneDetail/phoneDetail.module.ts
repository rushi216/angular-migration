import PhoneDetail from './phoneDetail.component';
import upgradeAdapter from '../core/upgradeAdapter';

export default angular.module('phonecat.phoneDetail', [
    'ngRoute',
    'phonecat.core'
]).directive('pcPhoneDetail', <ng.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(PhoneDetail));