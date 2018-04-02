import {Component , OnInit} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {PriceBlotterBondEntity} from '../adapttableblotter/entities/priceblotterbondentity';

@Component({
    selector: 'app-priceblotterbond',
    templateUrl: './priceblotterbond.component.html'
})

export class PriceBlotterComponent implements OnInit {

    title = 'Price Blotter';
    priceblotterentities: PriceBlotterBondEntity[] = [];
    constructor(private bankingservice: AdaptTableService) { }

    ngOnInit() {
       this.bankingservice.getPriceBlotters().subscribe(t => {
         this.priceblotterentities = t;
         console.log(this.priceblotterentities);
        });
    }
}
