import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterCDSIndexEntity} from '../adapttableblotter/entities/tradeblottercdsindexentity';

@Component({
    selector: 'app-tradeblottercdsindex',
    templateUrl: './tradeblottercdsindex.component.html'
})

export class TradeBlotterCDSIndexComponent implements OnInit {

    title = 'Trade Blotter CDS Index';
    rows: number;
    columns: number;
    tradeblottercdsindexentitities: TradeBlotterCDSIndexEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterCDSIndex().subscribe(t => {
         this.tradeblottercdsindexentitities = t;
         console.log(this.tradeblottercdsindexentitities);
         this.rows = this.tradeblottercdsindexentitities.length;
         console.log(this.tradeblottercdsindexentitities.length);
         this.columns = Object.keys(this.tradeblottercdsindexentitities[0]).length;
        });
    }
}
