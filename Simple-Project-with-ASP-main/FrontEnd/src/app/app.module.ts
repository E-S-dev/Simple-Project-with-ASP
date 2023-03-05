import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddpropertyComponent } from './property/add-property/add-property.component';
import { HousingService } from './services/housing.service';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';



const appRoute : Routes = [
  {path: '', component: PropertyListComponent},
  {path : 'buy-house', component: PropertyListComponent},
  {path : 'rent-house', component: PropertyListComponent},
  {path : 'add-property', component : AddpropertyComponent},
  //Dynamic Url 
  {path : 'property-details/:id', component: PropertyDetailsComponent},
  // Not exist url
  {path:'**', component: PropertyListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddpropertyComponent,
    PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
