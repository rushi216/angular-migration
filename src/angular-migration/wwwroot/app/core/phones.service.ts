import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export interface Phone {
    name: string;
    snippet: string;
    images: string[];
}

@Injectable()
export class Phones {
    constructor(private http: Http) { }
    
    getPhones(): Promise<Phone[]> {
        return this.http.get('phones/phones.json')
            .map((res: Response) => res.json()).toPromise();
    }
    getPhone(phone: any): Promise<Phone> {
        return this.http.get(`phones/${phone.phoneId}.json`)
            .map((res: Response) => res.json()).toPromise();
    }
}

