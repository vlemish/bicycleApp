import {Injectable} from '@angular/core';
import { ɵBrowserPlatformLocation } from '@angular/common';

@Injectable()
export class Bicycle{
    public id : number;
    public name : string;
    public type : number;
    public price : number;
    public isRented : boolean = false;
    constructor( name: string, type: number, price : number, isRented: boolean) {
        this.name=name;
        this.type=type;
        this.price=price;
        this.isRented=isRented;        
      }

    }   
  