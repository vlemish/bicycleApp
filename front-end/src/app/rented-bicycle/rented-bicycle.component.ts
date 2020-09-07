import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BicycleService } from '../bicycle.service';
import { Bicycle } from '../bicycle';


@Component({
  selector: 'rented-bicycle',
  templateUrl: './rented-bicycle.component.html',
  styleUrls: ['./rented-bicycle.component.css']
})
export class RentedBicycleComponent implements OnInit {

  amount : number = 0;
  
  bicycles : Bicycle[];

  updateAmount(){
    for(let bicycle of this.bicycles){
      this.amount+=bicycle.price;
    }
  }

    private loadBicycles(){
      
      this.service.getUnavaliableBicycles().subscribe((data: Bicycle[])=>{
        this.bicycles = data;
        this.amount = 0;
        this.updateAmount();
        console.log("was requested!");
      });
    }

    ngOnInit(){
      this.loadBicycles();
    }

    typeToString(type: number){
      switch(type){
        case 0:{
          return "Custom";
        }

        case 1:{
          return "Mountain";
        }

        case 2:{
          return "Railway";
        }
      }
    }

    @Output() onAdded = new EventEmitter();


    updateRent(id: number, bicycle : Bicycle){
      console.log(id);
      bicycle.isRented=false;
      this.service.updateBicycle(id,bicycle).subscribe(response=>{
        if(response===204){
          this.loadBicycles();
          this.onAdded.emit();
        }
      });
    }

    constructor(private service : BicycleService){}


}
