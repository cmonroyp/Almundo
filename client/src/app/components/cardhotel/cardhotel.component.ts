import { Component, OnInit} from '@angular/core';

//HotelService
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-cardhotel',
  templateUrl: './cardhotel.component.html',
  styleUrls: ['./cardhotel.component.css']
})
export class CardhotelComponent implements OnInit {

  arrayStar=[1,2,3,4,5];
  arrayHoteles:Array<any> = [];
  arrayModal:Array<any> = [];
  loading: boolean=true;
  image:string;

  constructor(private hotelService: HotelService) {    
   }

  ngOnInit() {
    this.cargaHoteles();
  }

  cargaHoteles(){

    this.loading = true;
    this.hotelService.getHoteles()
        .subscribe((res:any)=>{
          console.log(res.total);
          this.arrayHoteles = res.hoteles;
          this.loading = false;
          console.log(this.arrayHoteles)
        })
  }

  busquedaHoteles(hotel:string){
    //console.log('hotel a buscar',hotel);
    this.loading = true;
    this.hotelService.getHotelName(hotel)
        .subscribe((res)=>{
          this.arrayHoteles = res.hoteles;
          console.log(res.total)
          this.loading = false;
        })
  }

  hotelByStar(star:number){

    this.loading = true;
    this.hotelService.searchByStar(star)
        .subscribe((resp:any)=>{
          this.arrayHoteles = resp.hoteles;
          console.log(resp.total);
          this.loading = false;
        })
  }

  showDetailHotel(id:any){
    //console.log(id)    
    for(let i of this.arrayHoteles){

      if(i.id == id){
        this.image = i.image;
      }
  
    }

 
  }
}
