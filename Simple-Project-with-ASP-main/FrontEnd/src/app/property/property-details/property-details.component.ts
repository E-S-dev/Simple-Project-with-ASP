import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})

// Fetch Details Data from DataBase
export class PropertyDetailsComponent implements OnInit{

  public PropertyId : number;
// to access information related to "property-datails" active Route
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void{
    // this function return the parameter as String so we should transform it to number with Number() Function or with '+'
    this.PropertyId = +this.route.snapshot.params['id'];  //'id' should ba the same as in html file where the dinamic url is, in this case "property-card.component.html"
    this.route.params.subscribe(
      (params) => {this.PropertyId = +params['id'];}
    )
  }

  onSelectNext(){
    this.PropertyId +=1;
    this.router.navigate(['property-details', this.PropertyId]);
  }
  onSelectPrev(){
    this.PropertyId -=1;
    this.router.navigate(['property-details', this.PropertyId]);
  }
}
