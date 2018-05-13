import { Component, OnInit, ViewChild , AfterViewInit ,   NgZone,
  OnDestroy } from '@angular/core';
import {AppService} from './app.service';
import {BankEntity} from './bankentity';

import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { IgxNavigationDrawerComponent } from 'igniteui-angular/navigation-drawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit , OnDestroy {
  //title = 'Trade Blotter CDS';
  rows: number;
  columns: number;
  rowsCount = 1200;
  localData: BankEntity[] = [];
  localData1: BankEntity[] = [];
  localData2: BankEntity[] = [];
  private _live = false;
  private _timer;
  persec = 10;
  selectedTicker: string;
  buysellarray = [
    'Buy',
    'Sell'
 ];
 buysellarrayindex: number;

  get live() {
    return this._live;
  }

  set live(val) {
    this._live = val;
    if (this._live) {
      this._timer = setInterval(() => this.ticker(), this.persec);
    } else {
      clearInterval(this._timer);
    }
  }

  @ViewChild('grid1', { read: IgxGridComponent })
  public grid: IgxGridComponent;

  constructor(private zone: NgZone, private appservice: AppService) { }

  ngAfterViewInit() {
   // console.log(this.grid.verticalScrollContainer.igxForContainerSize);
  }

  ngOnInit() {
    this.appservice.getData().subscribe(t => {
      this.localData = t;
      this.localData2 = t;
      this.rows = this.localData.length;
      // this.columns = Object.keys(this.localData[0]).length;
      this.columns = 130;
     });
 }

  rebindgrid() {
    this.localData = Array.from(this.localData2);
   // this.localData = this.localData2;
    this.localData1 = this.getMoreData(this.rowsCount-1200);
    this.localData = this.localData.concat(this.localData1);
    this.grid.data = this.localData;
    this.grid.markForCheck();
    this.rows = this.localData.length;
  }

  handleRowSelection(args) {

      console.log(args.cell.row.rowData.Ticker);
      this.selectedTicker = args.cell.row.rowData.Ticker;
  }

  getMoreData(count): BankEntity[] {
    const p = [];
    for (let i = 0; i < count ; i ++ ) {
        const dataindex = Math.floor(Math.random() * this.localData.length);
        const cobject = Object.assign({}, this.localData[dataindex]);
        cobject.TradeId = this.localData.length + i + 1;
        p.push(cobject);
      }
      p.sort((a, b) =>  a.TradeId - b.TradeId );
      return p;
  }

  persecvaluechange(t) {

    // if (this._live) {
    //   this._timer = setInterval(() => this.ticker(), t.value);
    // } else {
        clearInterval(this._timer);
        this._timer = setInterval(() => this.ticker(), t.value);
        this.persec = t.value;
    // }
   // console.log(t.value);
   // this._timer = setInterval(() => this.ticker(), t.value);

  }


  private ticker() {
    this.zone.runOutsideAngular(() => {
      this.updateData();
      this.zone.run(() => this.grid.markForCheck());
    });
  }


  changelivestatus(e) {
     console.log(e.checked);
     this._live = e.checked;
     if (e.checked) {
          this._timer = setInterval(() => this.ticker(), this.persec);
     } else if (e.checked === false) {
      clearInterval(this._timer);
     // this.persec = 10;
     }
  }


  public ngOnDestroy() {
    clearInterval(this._timer);
  }


   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private updateData() {
   this.localData.forEach(

     (a) => {
      this.buysellarrayindex = Math.floor(Math.random() * this.buysellarray.length);
       a.Coupon = this.getRandomInt(10, 500);
       a.Notional = this.getRandomInt(1000000, 7000000);
       a.BuySell  = this.buysellarray[this.buysellarrayindex];
     });
  }
}
