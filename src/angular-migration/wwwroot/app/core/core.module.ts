import {Phones} from './phones.service';
import upgradeAdapter from './upgradeAdapter';

upgradeAdapter.addProvider(Phones);

export default angular.module('phonecat.core',
    ['ngResource']).
    service('Phone', upgradeAdapter.downgradeNg2Provider(Phones));