import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../bicycle.service';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'avaliable-bicycle',
  templateUrl: './avaliable-bicycle.component.html',
  styleUrls: ['./avaliable-bicycle.component.html']
})
export class AvaliableBicycleComponent implements OnInit {

  count : number = 0;
  
  public bicycles: Bicycle[];

  // remove(i:number){
  //   for(let i=0;i<this.bicycles.length;++i){
  //   }
  // }
  
    private loadBicycles() : void{
      
         this.service.getAvaliableBicycles().subscribe(data  =>{
           console.log(data);
           this.bicycles = data;
           console.log(this.bicycles);
         }

      );
    }

    ngOnInit(){
      this.loadBicycles();
      console.log(this.bicycles);
      console.log("Init");
    }

    updateRent(id: number, bicycle: Bicycle){
      console.log(this.bicycles);
      console.log(this.bicycles);
      // console.log(id);
      bicycle.isRented=true;
      this.service.updateBicycle(id,bicycle).subscribe();

    }

    removeBicycle(id: number){
      this.service.deleteBicycle(id).subscribe();
      window.location.reload();
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
