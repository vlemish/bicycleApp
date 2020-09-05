import { Component, OnInit } from '@angular/core';
import { AvaliableBicycleComponent } from '../avaliable-bicycle/avaliable-bicycle.component';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service';

@Component({
  selector: 'add-bicycle',
  templateUrl: './add-bicycle.component.html',
  styleUrls: ['./add-bicycle.component.css'],
  providers: [AvaliableBicycleComponent]

})

export class AddBicycleComponent {

  bicycleName : string = "Superfast bicycle";
  bicycleType : string = "Custom";
  bicyclePrice : number = 29.99;

  options = [
    {name : "Custom", value: 0 },
    {name : "Mountain", value: 1 },
    {name : "Railway", value: 2 },
  ]


  constructor(private service : BicycleService){}
  addBicycle(bicycleName,bicycleType,bicyclePrice): void{
    this.service.createBicycle(new Bicycle( bicycleName, bicycleType, bicyclePrice, false)).subscribe();
    window.location.reload();
  }

}
