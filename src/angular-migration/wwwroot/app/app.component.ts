import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import PhoneList from './phoneList/phoneList.component';
import PhoneDetail from './phoneDetail/phoneDetail.component';

@RouteConfig([
    { path: '/phones', name: 'Phones', component: PhoneList },
    { path: '/phones/:phoneId', name: 'Phone', component: PhoneDetail },
    { path: '/', redirectTo: ['Phones'] }
])

@Component({
    selector: 'pc-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

export default class AppComponent {
    
}