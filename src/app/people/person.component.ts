import {Component, OnInit , ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {PersonEntity} from '../people/personentity';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';

@Component({
  selector: 'app-people',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit, AfterViewInit {
  title = 'People';
  public rowsCount = 100;
  people: PersonEntity[] = [];
  rowOptions: any;
  @ViewChild('grid1', { read: IgxGridComponent })
  public grid1: IgxGridComponent;
  constructor() { }

  ngOnInit() {
    this.people = this.getPeople(100);
    this.grid1.data = this.people;
  }

  ngAfterViewInit() {
  }

  rebindgrid() {
    this.people = this.getPeople(this.rowsCount);
    this.grid1.data = this.people;
    this.grid1.markForCheck();
  }

  getPeople(count): PersonEntity[] {
    let p = [];
    for (let i = 0; i < count; i++) {
     p.push(
       {
         Id: i + 1,
         Name: 'Steve Smith',
         Age: 35,
         BirthDay: '25 July',
         Street: 'Park Street',
         City: 'Phildelphia',
         Phone: '+91-9697997',
         Country: 'USA',
         Language: 'English',
         Sports: 'Baseball'

        }
      );
    }
    return p;
  }
}
