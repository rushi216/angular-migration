import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Phones} from './core/phones.service';
import AppComponent from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    Phones
]);