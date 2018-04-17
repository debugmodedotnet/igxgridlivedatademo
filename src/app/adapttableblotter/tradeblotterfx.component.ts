import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterFXEntity} from '../adapttableblotter/entities/tradeblotterfxentity';

@Component({
    selector: 'app-tradeblotterfx',
    templateUrl: './tradeblotterfx.component.html'
})

export class TradeBlotterFXComponent implements OnInit {

    title = 'Trade Blotter FX';
    rows: number;
    columns: number;
    tradeblotterfxentitities: TradeBlotterFXEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterFX().subscribe(t => {
         this.tradeblotterfxentitities = t;
         console.log(this.tradeblotterfxentitities);
         this.rows = this.tradeblotterfxentitities.length;
         console.log(this.tradeblotterfxentitities.length);
         this.columns = Object.keys(this.tradeblotterfxentitities[0]).length;
        });
    }
}
