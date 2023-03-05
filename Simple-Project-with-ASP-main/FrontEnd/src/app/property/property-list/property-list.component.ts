import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
// define array of objects, name it "Properties" and use it in "property-list.component.html"
  Properties: Array<IProperty> = [];

  SellRent = 1;

  constructor(private housingService: HousingService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    //Get the current url
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //means we are on rent-property URL else we are on the Base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.Properties = data
        console.log(data)
      }
    );
  }
}
