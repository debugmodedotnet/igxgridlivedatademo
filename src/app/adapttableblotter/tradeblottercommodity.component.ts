import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterCommodityEntity} from '../adapttableblotter/entities/tradeblottercommodityentity';

@Component({
    selector: 'app-tradeblottercommodity',
    templateUrl: './tradeblottercommodity.component.html'
})

export class TradeBlotterCommodityComponent implements OnInit {

    title = 'Trade Blotter Commodity';
    rows: number;
    columns: number;
    tradeblottercommodityentitities: TradeBlotterCommodityEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterCommodity().subscribe(t => {
         this.tradeblottercommodityentitities = t;
         console.log(this.tradeblottercommodityentitities);
         this.rows = this.tradeblottercommodityentitities.length;
         console.log(this.tradeblottercommodityentitities.length);
         this.columns = Object.keys(this.tradeblottercommodityentitities[0]).length;
        });
    }
}
