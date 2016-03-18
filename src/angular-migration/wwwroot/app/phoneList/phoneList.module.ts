import PhoneList from './phoneList.component';
import upgradeAdapter from '../core/upgradeAdapter';

export default angular.module('phonecat.phonelist', ['phonecat.core']).
    directive('pcPhoneList', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(PhoneList));
