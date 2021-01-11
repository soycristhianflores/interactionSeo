import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getHeaderLogo() {
    if (this.router.url.includes('/home')) {
      return 'logoBlanco';
    } else {
      return 'logoAzul';
    }
    
  }

  getHeaderStyle() {
    if (this.router.url.includes('/home')) {
      return 'white';
    } else {
      return 'blue';
    }
  }
  getInheret() {
    if (this.router.url.includes('/home')) {
      return 'fixed';
    } else {
      return 'nofixed';
    }
  }
  getHeaderLogo2() {
    if (this.router.url.includes('/home')) {
      const el = document.querySelector('#slide1');
      const el2 = document.querySelector('#slide22');
      if ((el.classList.contains('swiper-slide-active') || el2.classList.contains('swiper-slide-active'))) {
        return 'logoAzul';
      } else {
        return 'logoBlanco';
      }
    } else {
      return 'logoAzul';
    }
  }
  getColor() {
    // if (this.router.url.includes('/home')) {
    //   const el = document.querySelector('#slide1')
    //   const el2 = document.querySelector('#slide22');
    //   if (el.classList.contains('swiper-slide-active') || el2.classList.contains('swiper-slide-active')) {
    //     return 'white';
    //   } else {
    //     return 'blue';
    //   }
    // } else {
    //   return 'blue';
    // }
    if (this.router.url.includes('/home')) {
      return 'white';
    } else {
      return 'blue';
    }
  }
  getColor2() {
    if (this.router.url.includes('/home')) {
      this.getHeaderLogo();
    } else {
      this.getHeaderLogo2();
    }
  }
}
