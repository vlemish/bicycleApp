import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../bicycle.service';
import { Bicycle } from '../bicycle';


@Component({
  selector: 'rented-bicycle',
  templateUrl: './rented-bicycle.component.html',
})
export class RentedBicycleComponent implements OnInit {

  amount : number = 0;
  
  bicycles : Bicycle[] = [];

  getAmount(){
    for(let bicycle of this.bicycles){
      this.amount+=bicycle.price;
    }
  }

    private loadBicycles(){
      
      this.service.getUnavaliableBicycles().subscribe((data: Bicycle[])=>{
        this.bicycles=data;
      });
    }

    ngOnInit(){
      this.loadBicycles();
    }

    updateRent(id: number, bicycle : Bicycle){
      console.log(id);
      bicycle.isRented=false;
      this.service.updateBicycle(id,bicycle).subscribe(data => {
        this.loadBicycles();
      });
    }


    constructor(private service : BicycleService){}


}
