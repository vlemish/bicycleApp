import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../bicycle.service';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'avaliable-bicycle',
  templateUrl: './avaliable-bicycle.component.html',
})
export class AvaliableBicycleComponent implements OnInit {

  count : number = 0;
  
  public bicycles : Bicycle[] = [];

  remove(i:number){
    for(let i=0;i<this.bicycles.length;++i){
    }
  }

    private loadBicycles() : void{
      
         this.service.getAvaliableBicycles().subscribe((data)  =>{
          this.bicycles=data;
          console.log(this.bicycles);
      });
    }

    ngOnInit(){
      this.loadBicycles();
      console.log(this.bicycles);
    }

    updateRent(id: number, bicycle: Bicycle){
      console.log(id);
      bicycle.isRented=true;
      this.service.updateBicycle(id,bicycle).subscribe();

    }

    removeBicycle(id: number){
      console.log(id);
      this.service.deleteBicycle(id).subscribe();
    }

    constructor(private service : BicycleService){
    }
}
