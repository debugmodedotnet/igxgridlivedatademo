// Angular Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

// Ignite UI for Angular Imports
import { IgxNavigationDrawerModule,
         IgxNavbarModule,
         IgxLayoutModule,
         IgxRippleModule,
         IgxGridModule,
         IgxIconModule,
         IgxSliderModule,
         IgxButtonModule
         } from 'igniteui-angular/main';


// Application Imports
import { AppComponent } from './app.component';
import {AboutComponent } from './about/about.component';
import {BankingComponent} from './banking/banking.component';
import {VisaStockComponent} from './visastock/visastock.component';
import {TradesBolotterComponent} from './tradesblotter/tradesblotter.component';
import {TradesBlotterService} from './tradesblotter/tradesblotter.service';
import {InMemoryMockDataService} from './shared/inmemory.data.service';
import {PersonComponent} from './people/person.component';
import {VisaStockrService} from './visastock/visastock.service';
import {BankingService} from './banking/banking.service';
@NgModule({
  declarations: [
    AppComponent, AboutComponent, PersonComponent, BankingComponent, VisaStockComponent, TradesBolotterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxIconModule,
    IgxButtonModule,
    IgxSliderModule,
    IgxGridModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMockDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TradesBlotterService, VisaStockrService , BankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
