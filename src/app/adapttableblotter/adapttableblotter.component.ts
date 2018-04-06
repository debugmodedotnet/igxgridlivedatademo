import {Component , OnInit, ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {AdaptableBlotterDsEntity} from '../adapttableblotter/entities/adaptableblotterdsentity';
import {PriceBlotterComponent} from '../adapttableblotter/priceblotterbond.component';
import {TradeBlotterBondComponent} from '../adapttableblotter/tradeblotterbond.component';
import {ContactsComponent} from '../adapttableblotter/contacts.component';
import {FTSECloseComponent} from '../adapttableblotter/ftseclose.component';
import {NorthWindOrdersComponent} from '../adapttableblotter/northwindorders.component';
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
    changeDs(ds) {
        console.log(this.selectedDataSource.Title);
        this.changeDataSource();
    }

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
          } else if (this.selectedDataSource.Id === '3') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(ContactsComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '4') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(FTSECloseComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '5') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(NorthWindOrdersComponent);
            const componentRef = this.entry.createComponent(factory);
          }

    }

    getAdaptTableDs() {
        return [
            new AdaptableBlotterDsEntity('1', 'Price Blotter Bond'),
            new AdaptableBlotterDsEntity('2', 'Trade Blotter Bond'),
            new AdaptableBlotterDsEntity('3', 'Contacts'),
            new AdaptableBlotterDsEntity('4', 'FTSE Close'),
            new AdaptableBlotterDsEntity('5', 'NorthWind Orders'),
        ];
    }
}
