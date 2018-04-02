import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {TradeBlotterBondEntity} from '../adapttableblotter/entities/tradeblotterbondentity';

@Component({
    selector: 'app-tradeblotterbond',
    templateUrl: './tradeblotterbond.component.html'
})

export class TradeBlotterBondComponent implements OnInit {

    title = 'Trade Blotter Bond';
    tradeblotterbondentities: TradeBlotterBondEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getTradeBlotterBond().subscribe(t => {
         this.tradeblotterbondentities = t;
         console.log(this.tradeblotterbondentities);
        });
    }
}
