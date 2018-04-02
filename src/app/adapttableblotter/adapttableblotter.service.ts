import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {PriceBlotterBondEntity} from '../adapttableblotter/entities/priceblotterbondentity';
import {TradeBlotterBondEntity} from '../adapttableblotter/entities/tradeblotterbondentity';
@Injectable()
export class AdaptTableService {

    private tradesblottersapiurl = './assets/priceblotterbond.json';
    private tradeblotterbondapiurl = './assets/tradeblotterbond.json';
    constructor(private http: HttpClient) { }

    getPriceBlotters (): Observable<PriceBlotterBondEntity[]> {
        return this.http.get<PriceBlotterBondEntity[]>(this.tradesblottersapiurl);
      }

      getTradeBlotterBond (): Observable<TradeBlotterBondEntity[]> {
        return this.http.get<TradeBlotterBondEntity[]>(this.tradeblotterbondapiurl);
      }

    // getPriceBlotters () {
    //     return this.http.get(this.tradesblottersapiurl).map( (response: Response) => {
    //         const data = response.json();
    //         console.log(data);
    //         return data;
    //      });
    //   }

}
