import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BicycleService } from '../bicycle.service';
import { Bicycle } from '../bicycle';
import { RentedBicycleComponent } from '../rented-bicycle/rented-bicycle.component';

@Component({
  selector: 'avaliable-bicycle',
  templateUrl: './avaliable-bicycle.component.html',
  styleUrls: ['./avaliable-bicycle.component.html']
})
export class AvaliableBicycleComponent implements  OnInit {

  count : number = 0;
  
  public bicycles: Bicycle[];

  @ViewChild (RentedBicycleComponent) child:RentedBicycleComponent;
  
  private loadBicycles() : void{
      
         this.service.getAvaliableBicycles().subscribe(data  =>{
           this.count = 0;
            this.bicycles = data;
         }

      );
    }

    onAdded(str: string){
      this.loadBicycles();
      
      console.log(str);
    }



    ngOnInit(){
      this.loadBicycles();
      console.log(this.bicycles);
      console.log("Init");
    }

    updateRent(id: number, bicycle: Bicycle){
      console.log(this.bicycles);
      console.log(this.bicycles);
      bicycle.isRented=true;
      this.service.updateBicycle(id,bicycle).subscribe(response=>{
        if(response===204){
          this.loadBicycles();
          this.child.ngOnInit();
        }
      });

    }

    removeBicycle(id: number){
      this.service.deleteBicycle(id).subscribe(response=>{
        if(response===200){
          this.loadBicycles();
        }
      });
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


    constructor(private service : BicycleService){
    }
}
