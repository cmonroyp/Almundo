import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

//controladores
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CardhotelComponent } from './components/cardhotel/cardhotel.component';
//Pipe para retornar imagenes
import { ImagesPipe } from './pipes/images.pipe';
import { AmenitiesPipe } from './pipes/amenities.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    CardhotelComponent,
    ImagesPipe,
    AmenitiesPipe,
    LoadingComponent,
    ModalImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
