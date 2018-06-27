import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() hotelBuscar:EventEmitter<any> = new EventEmitter<any>();
  @Output() searchByStar:EventEmitter<any> = new EventEmitter<any>();

  arrayStar: Array<any> = [
    { id: 5, star:[true,true,true,true,true],idx:0},
    { id: 4, star:[true,true,true,true]},
    { id: 3, star:[true,true,true]},
    { id: 2, star:[true,true]},
    { id: 1, star:[true]}    
  ]

  check_all:boolean = true;  
  faSortStar:boolean = false;
  faSortSearch:boolean = false;
  txtBusqueda:string;
 

  constructor() { 
    console.log(this.arrayStar)
  }

  ngOnInit() {
  }

  setStar(data:any,item:any){

    // console.log(item.id)
    // console.log(data.target.checked)
    this.check_all= false;
    //console.log(data)
    if(data.target.checked){
      this.searchByStar.emit(item.id);
    }
    
  }

  checkall(data:any){
   
    this.check_all= true;  
    if(data.target.checked){
      this.searchByStar.emit(0);
    }
  }

  changeIconStar(){
    this.faSortStar =!this.faSortStar;
  }

  changeIconSearch(){
    this.faSortSearch =!this.faSortSearch;
  }

  busquedaHotel(hotel: NgForm){ 
    // console.log(forma.valid)
    if(!hotel.valid){
      return;
    }
     this.hotelBuscar.emit(hotel.value.txtBusqueda);
  }
}
