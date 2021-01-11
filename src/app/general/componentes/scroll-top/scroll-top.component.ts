import { Component, OnInit } from '@angular/core';
declare const scroll: any;
declare const topFunction: any;

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    scroll()
    
  }
  top(){
    topFunction();
  }
  
}
