import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <div class="body-content">
    <h1>Awesome Bike Rental</h1>
    <div id=CreateNewRent>
    <add-bicycle></add-bicycle>
    </div>
    <div id="YourRent">
    <rented-bicycle></rented-bicycle>
    </div>
    <div id="AvaliableBicycles">
        <avaliable-bicycle></avaliable-bicycle>
    </div>
</div>`,

})
export class AppComponent { 
    
}  // templateUrl: './rented-bicycle.component.html',