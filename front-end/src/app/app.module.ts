import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddBicycleComponent } from './add-bicycle/add-bicycle.component';
import {RentedBicycleComponent} from './rented-bicycle/rented-bicycle.component';
import {AvaliableBicycleComponent} from './avaliable-bicycle/avaliable-bicycle.component';

import {BicycleService} from './bicycle.service';

import { HttpClientModule }   from '@angular/common/http';


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, AddBicycleComponent,  RentedBicycleComponent, AvaliableBicycleComponent, AddBicycleComponent, RentedBicycleComponent, AvaliableBicycleComponent],
    providers: [ BicycleService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }