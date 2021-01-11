import { Component, OnInit } from '@angular/core';
declare const tooltip: any;

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    tooltip();
  }

}
