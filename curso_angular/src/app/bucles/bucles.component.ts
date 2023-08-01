import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas: Persona[] = [
    {nombre: "Jose", edad: 21},
    {nombre: "Juan", edad: 25},
    {nombre: "Luis", edad: 26},
    {nombre: "Camila", edad: 30},    
  ];

}
