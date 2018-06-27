import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
//ENDPOIND
import { AppSettings } from '../api.settings';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url: string;
  constructor(private http:HttpClient) { 
    this.url = AppSettings.API_ENDPOIND;
  }

  getHoteles(){
    
   let headers = new HttpHeaders({'Content-Type':'application/json'});
   return this.http.get(`${this.url}get_hoteles`, { headers });
  }

  getHotelName(name:string){

    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get(`${this.url}get_hotel/${name}`, {headers})
              .pipe(
                map((resp:any)=>{
                  return resp;
                }),
                catchError(err => of(
                  `Error Retornado: ${JSON.stringify(err) }`,
                  `${Swal('Oops...',err.error.message,'info')}`
                ))
              )
  }


  searchByStar(stars:number){

    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get(`${this.url}get_hotelStar/${stars}`, {headers})
              .pipe(
                map((resp:any)=>{
                  return resp;
                }),
                catchError(err => of(
                  `Error Retornado: ${JSON.stringify(err) }`,
                  `${Swal('Oops...',err.error.message,'info')}`
                ))
              )
  }
}
