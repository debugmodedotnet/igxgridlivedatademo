import {Component , OnInit, ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {AdaptableBlotterDsEntity} from '../adapttableblotter/entities/adaptableblotterdsentity';
import {PriceBlotterComponent} from '../adapttableblotter/priceblotterbond.component';
import {TradeBlotterBondComponent} from '../adapttableblotter/tradeblotterbond.component';
@Component({
    selector: 'app-adapttableblotter',
    templateUrl: './adapttableblotter.component.html'
})

export class AdaptTableBlotterComponent implements OnInit {

    AdapttableBlotterDataSoureOptions: AdaptableBlotterDsEntity[] = [];
    selectedDataSource: AdaptableBlotterDsEntity;

    @ViewChild('gridcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit() {
      this.AdapttableBlotterDataSoureOptions = this.getAdaptTableDs();
      this.selectedDataSource = this.AdapttableBlotterDataSoureOptions[0];
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(PriceBlotterComponent);
      const componentRef = this.entry.createComponent(factory);

    }
    // changeDs(ds) {
    //     console.log(this.selectedDataSource.Title);
    // }

    changeDataSource() {
        if (this.selectedDataSource.Id === '1') {
            console.log(' 1') ;
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(PriceBlotterComponent);
            const componentRef = this.entry.createComponent(factory);
            //componentRef.instance.message = message;

        } else if (this.selectedDataSource.Id === '2') {
            console.log('2') ;
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(TradeBlotterBondComponent);
            const componentRef = this.entry.createComponent(factory);
          }

    }

    getAdaptTableDs() {
        return [
            new AdaptableBlotterDsEntity('1', 'Price Blotter Bond'),
            new AdaptableBlotterDsEntity('2', 'Trade Blotter Bond'),
        ];
    }
}
