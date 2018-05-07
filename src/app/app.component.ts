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
  localData: BankEntity[] = [];
  private _live = true;
  private _timer;

  get live() {
    return this._live;
  }

  set live(val) {
    this._live = val;
    if (this._live) {
      this._timer = setInterval(() => this.ticker(), 50);
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
       this.rows = this.localData.length;
      // console.log(t);
       this.columns = Object.keys(this.localData[0]).length;
      });
     
  }

  private ticker() {
    this.zone.runOutsideAngular(() => {
      this.updateData();
      this.zone.run(() => this.grid.markForCheck());
    });
  }


  changelivestatus(e) {
     console.log(e.checked);
     if (e.checked) {
          this._timer = setInterval(() => this.ticker(), 100);
     } else {
      clearInterval(this._timer);
      
     }
  }


  public ngOnDestroy() {
    clearInterval(this._timer);
  }


  private updateData() {

   this.localData.sort((a, b) =>  a.Tenor - b.Tenor );






   

    // this.localData.map((rec) => {
    //     let val = this.generateRandomNumber(-1, 1);
    //     switch (val) {
    //     case -1:
    //         val = 0;
    //         break;
    //     case 0:
    //         val = 1;
    //         break;
    //     case 1:
    //         val = 3;
    //         break;
    //     }

    //     rec.TrackProgress += val;
    // });
    // const unsortedData = this.localData.slice(0);

    // this.localData.sort((a, b) => b.TrackProgress - a.TrackProgress).map((rec, idx) => rec.Id = idx + 1);
    // this.localData = this.localData.slice(0);

    // unsortedData.forEach((element, index) => {
    //     this.localData.some((elem, ind) => {
    //         if (element.Id === elem.Id) {
    //             const position = index - ind;

    //             if (position < 0) {
    //                 elem.Position = "down";
    //             } else if (position === 0) {
    //                 elem.Position = "current";
    //             } else {
    //                 elem.Position = "up";
    //             }

    //             return true;
    //         }
    //     });
    // });

  

    // if (this.localData[0].TrackProgress >= 100) {
    //   this.live = false;
    //   this.isFinished = true;
    // }
  }

  
  private generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
