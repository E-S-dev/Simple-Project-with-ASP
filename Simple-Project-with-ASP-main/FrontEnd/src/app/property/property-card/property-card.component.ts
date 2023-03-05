// you should import "Input" to work

import { Component, Input } from "@angular/core";
import { IProperty } from "../iproperty.interface";

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']

})

export class PropertyCardComponent{
  // import the property array from property-list.component.html
  // indicate that the type may be either a type from Interface or undefined.
 @Input() property !: IProperty;
}
