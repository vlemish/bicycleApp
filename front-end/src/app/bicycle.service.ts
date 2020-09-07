import {Injectable} from '@angular/core';
import {Bicycle} from './bicycle';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';

@Injectable()
export class BicycleService{


    private url = "https://localhost:44305/api/Bicycle";

    constructor(private http: HttpClient){ }

    //TOGET all the bikes from Db(not necessary)
    getBicycles() : Observable<Bicycle[]>{
        return this.http.get<Bicycle[]>(this.url);
    }

    //TOGET ONLY avaliable to rent bikes
    getAvaliableBicycles(): Observable<Bicycle[]>{

        return this.http.get<Bicycle[]>(this.url+"/avaliables");
    }

    //TOGET ONLY rented bikes
    getUnavaliableBicycles() : Observable<Bicycle[]>{
        
        return this.http.get<Bicycle[]>(this.url+"/unavaliables");
    }


    //TOCREATE a new bike and adding the bike to Db
    createBicycle(bicycle: Bicycle){

        const body = {
            name: bicycle.name, type : bicycle.type, price: bicycle.price, isRented : bicycle.isRented
        };
        return this.http.post(this.url, body, {observe: 'response'})
        .pipe(
            map(response=> response.status)
        ); 
    }
    
    //TOUPDATE a bike by id
    updateBicycle(id: number, bicycle: Bicycle){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Bicycle>(this.url +"/" + id, JSON.stringify(bicycle), {observe: 'response','headers': myHeaders }).pipe(
            (
                map(response=> response.status)
            )
        );
    }
    
    //TODELETE a bike from Db
    deleteBicycle(id: number){
        return this.http.delete(this.url + '/' + id, {observe: 'response'}).pipe(
            (
                map(response=> response.status)
            )
        );
    }
    
}

