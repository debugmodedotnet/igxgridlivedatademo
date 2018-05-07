import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {BankEntity} from './bankentity';


@Injectable()
export class AppService {


   private tradeblottercdsapiurl = './assets/tradeblottercds.json';

    constructor(private http: HttpClient) { }
      getData (): Observable<BankEntity[]> {
        return this.http.get<BankEntity[]>(this.tradeblottercdsapiurl);
      }
}
