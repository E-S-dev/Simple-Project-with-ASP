import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddpropertyComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
  onBack(){
    this.router.navigate(['/']);
  }

}
