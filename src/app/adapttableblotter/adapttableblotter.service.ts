import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {PriceBlotterBondEntity} from '../adapttableblotter/entities/priceblotterbondentity';
import {TradeBlotterBondEntity} from '../adapttableblotter/entities/tradeblotterbondentity';
import {ContactEntity} from '../adapttableblotter/entities/contactentity';
import {FTSECloseEntity} from '../adapttableblotter/entities/ftsecloseentity';
import {NorthwindOrdersEntity} from '../adapttableblotter/entities/northwindordersentity';
import {PriceBlotterCDSIndexEntity} from '../adapttableblotter/entities/priceblottercdsindexentity';
import {PriceBlotterCommodityEntity} from '../adapttableblotter/entities/priceblottercommodityentity';
import {PriceBlotterFxEntity} from '../adapttableblotter/entities/priceblotterfxentity';
import {TradeBlotterCDSEntity} from '../adapttableblotter/entities/tradeblottercdsentity';
import {TradeBlotterCDSIndexEntity} from '../adapttableblotter/entities/tradeblottercdsindexentity';
import {TradeBlotterCommodityEntity} from '../adapttableblotter/entities/tradeblottercommodityentity';
import {TradeBlotterFXEntity} from '../adapttableblotter/entities/tradeblotterfxentity';

@Injectable()
export class AdaptTableService {

    private tradesblottersapiurl = './assets/priceblotterbond.json';
    private tradeblotterbondapiurl = './assets/tradeblotterbond.json';
    private contactsapiurl = './assets/contacts.json';
    private ftsecloseapiurl = './assets/ftseclose.json';
    private northwindsorderspiurl = './assets/northwindorders.json';
    private priceblottercdsindexapiurl = './assets/priceblottercdsindex.json';
    private priceblottercommodityapiurl = './assets/priceblottercommodity.json';
    private priceblotterfxapiurl = './assets/priceblotterfx.json';
    private tradeblottercdsapiurl = './assets/tradeblottercds.json';
    private tradeblottercdsindexapiurl = './assets/tradeblottercdsindex.json';
    private tradeblottercommodityapiurl = './assets/tradeblottercommodity.json';
    private tradeblotterfxapiurl = './assets/tradeblotterfx.json';

    constructor(private http: HttpClient) { }

    getPriceBlotters (): Observable<PriceBlotterBondEntity[]> {
        return this.http.get<PriceBlotterBondEntity[]>(this.tradesblottersapiurl);
      }

      getPriceBlottercdsIndex (): Observable<PriceBlotterCDSIndexEntity[]> {
        return this.http.get<PriceBlotterCDSIndexEntity[]>(this.priceblottercdsindexapiurl);
      }

      getPriceBlotterFx (): Observable<PriceBlotterFxEntity[]> {
        return this.http.get<PriceBlotterFxEntity[]>(this.priceblotterfxapiurl);
      }
      getPriceBlotterCommodity (): Observable<PriceBlotterCommodityEntity[]> {
        return this.http.get<PriceBlotterCommodityEntity[]>(this.priceblottercommodityapiurl);
      }
      getTradeBlotterBond (): Observable<TradeBlotterBondEntity[]> {
        return this.http.get<TradeBlotterBondEntity[]>(this.tradeblotterbondapiurl);
      }
      getTradeBlotterCDS (): Observable<TradeBlotterCDSEntity[]> {
        return this.http.get<TradeBlotterCDSEntity[]>(this.tradeblottercdsapiurl);
      }
      getTradeBlotterCommodity (): Observable<TradeBlotterCommodityEntity[]> {
        return this.http.get<TradeBlotterCommodityEntity[]>(this.tradeblottercommodityapiurl);
      }

      getTradeBlotterCDSIndex (): Observable<TradeBlotterCDSIndexEntity[]> {
        return this.http.get<TradeBlotterCDSIndexEntity[]>(this.tradeblottercdsindexapiurl);
      }
      getTradeBlotterFX (): Observable<TradeBlotterFXEntity[]> {
        return this.http.get<TradeBlotterFXEntity[]>(this.tradeblotterfxapiurl);
      }
      getftseclose (): Observable<FTSECloseEntity[]> {
        return this.http.get<FTSECloseEntity[]>(this.ftsecloseapiurl);
      }

      getContacts (): Observable<ContactEntity[]> {
        return this.http.get<ContactEntity[]>(this.contactsapiurl);
      }
      getNorthwindorders (): Observable<NorthwindOrdersEntity[]> {
        return this.http.get<NorthwindOrdersEntity[]>(this.northwindsorderspiurl);
      }


    // getPriceBlotters () {
    //     return this.http.get(this.tradesblottersapiurl).map( (response: Response) => {
    //         const data = response.json();
    //         console.log(data);
    //         return data;
    //      });
    //   }

}
