import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import {BankEntity} from '../bankentity';


@Injectable()
export class BankService {

//    private priceblotterbondapiurl = './assets/priceblotterbond.json';
//    private tradeblotterbondapiurl = './assets/tradeblotterbond.json';
//     private contactsapiurl = './assets/contacts.json';
//    private ftsecloseapiurl = './assets/ftseclose.json';
//    private northwindsorderspiurl = './assets/northwindorders.json';
//    private priceblottercdsindexapiurl = './assets/priceblottercdsindex.json';
//    private priceblottercommodityapiurl = './assets/priceblottercommodity.json';
//    private priceblotterfxapiurl = './assets/priceblotterfx.json';
   private tradeblottercdsapiurl = './assets/tradeblottercds.json';
//    private tradeblottercdsindexapiurl = './assets/tradeblottercdsindex.json';
//     private tradeblottercommodityapiurl = './assets/tradeblottercommodity.json';
//    private tradeblotterfxapiurl = './assets/tradeblotterfx.json';


   // Calling REST  API
    // private priceblotterbondapiurl = 'http://localhost:8090/api/priceblotterbond';
    // private tradeblotterfxapiurl = 'http://localhost:8090/api/tradeblotterfx';
    // private contactsapiurl = 'http://localhost:8090/api/contacts';
    // private tradeblotterbondapiurl = 'http://localhost:8090/api/tradeblotterbond';
    // private ftsecloseapiurl = 'http://localhost:8090/api/ftseclose';
    // private northwindsorderspiurl = 'http://localhost:8090/api/northwindorders';
    // private priceblottercdsindexapiurl = 'http://localhost:8090/api/priceblottercdsindex';
    // private priceblottercommodityapiurl = 'http://localhost:8090/api/priceblottercommodity';
    // private priceblotterfxapiurl = 'http://localhost:8090/api/priceblotterfx';
    // private tradeblottercdsapiurl = 'http://localhost:8090/api/tradeblottercds';
    // private tradeblottercdsindexapiurl = ' http://localhost:8090/api/tradeblottercdsindex';
    // private tradeblottercommodityapiurl = 'http://localhost:8090/api/tradeblottercommodity';
 

    constructor(private http: HttpClient) { }

    // getPriceBlotters (): Observable<PriceBlotterBondEntity[]> {
    //     return this.http.get<PriceBlotterBondEntity[]>(this.priceblotterbondapiurl);
    //   }

    //   getPriceBlottercdsIndex (): Observable<PriceBlotterCDSIndexEntity[]> {
    //     return this.http.get<PriceBlotterCDSIndexEntity[]>(this.priceblottercdsindexapiurl);
    //   }

    //   getPriceBlotterFx (): Observable<PriceBlotterFxEntity[]> {
    //     return this.http.get<PriceBlotterFxEntity[]>(this.priceblotterfxapiurl);
    //   }
    //   getPriceBlotterCommodity (): Observable<PriceBlotterCommodityEntity[]> {
    //     return this.http.get<PriceBlotterCommodityEntity[]>(this.priceblottercommodityapiurl);
    //   }
    //   getTradeBlotterBond (): Observable<TradeBlotterBondEntity[]> {
    //     return this.http.get<TradeBlotterBondEntity[]>(this.tradeblotterbondapiurl);
    //   }
      getTradeBlotterCDS (): Observable<BankEntity[]> {
        return this.http.get<BankEntity[]>(this.tradeblottercdsapiurl);
      }
    //   getTradeBlotterCommodity (): Observable<TradeBlotterCommodityEntity[]> {
    //     return this.http.get<TradeBlotterCommodityEntity[]>(this.tradeblottercommodityapiurl);
    //   }

    //   getTradeBlotterCDSIndex (): Observable<TradeBlotterCDSIndexEntity[]> {
    //     return this.http.get<TradeBlotterCDSIndexEntity[]>(this.tradeblottercdsindexapiurl);
    //   }
    //   getTradeBlotterFX (): Observable<TradeBlotterFXEntity[]> {
    //     return this.http.get<TradeBlotterFXEntity[]>(this.tradeblotterfxapiurl);
    //   }
    //   getftseclose (): Observable<FTSECloseEntity[]> {
    //     return this.http.get<FTSECloseEntity[]>(this.ftsecloseapiurl);
    //   }

    //   getContacts (): Observable<ContactEntity[]> {
    //     return this.http.get<ContactEntity[]>(this.contactsapiurl);
    //   }
    //   getNorthwindorders (): Observable<NorthwindOrdersEntity[]> {
    //     return this.http.get<NorthwindOrdersEntity[]>(this.northwindsorderspiurl);
    //   }


 

}
