import { Component, OnInit} from '@angular/core';
declare const sliderHome2: any;
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {


  constructor() {
   
  }

  ngOnInit(){
    sliderHome2();
    
  }




}
