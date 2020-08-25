import {Injectable} from '@angular/core';
import {Bicycle} from './bicycle';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class BicycleService{


    private url = "https://localhost:44305/api/Bicycle";

    constructor(private http: HttpClient){ }

    //TOGET all the bikes from Db(not necessary)
    getBicycles() : Observable<Bicycle[]>{
        console.log(this.http.get(this.url));
        return this.http.get<Bicycle[]>(this.url);
    }

    //TOGET ONLY avaliable to rent bikes
    getAvaliableBicycles(){
        console.log(this.http.get<Bicycle[]>(this.url+"/avaliables"));
        return this.http.get<Bicycle[]>(this.url+"/avaliables");
    }

    //TOGET ONLY rented bikes
    getUnavaliableBicycles() : Observable<Bicycle[]>{
        console.log(this.http.get<Bicycle[]>(this.url+"/unavaliables"));
        return this.http.get<Bicycle[]>(this.url+"/unavaliables");
    }


    //TOCREATE a new bike and adding the bike to Db
    createBicycle(bicycle: Bicycle){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        const body = {
            name: bicycle.name, type : bicycle.type, price: bicycle.price, isRented : bicycle.isRented
        };
        return this.http.post(this.url, body, {headers: myHeaders}); 
    }

    //TOUPDATE a bike by id
    updateBicycle(id: number, bicycle: Bicycle){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        
        return this.http.put(this.url, JSON.stringify(bicycle), {headers: myHeaders});
    }

    //TODELETE a bike from Db
    deleteBicycle(id: number){
        return this.http.delete(this.url + '/' + id);
    }



}