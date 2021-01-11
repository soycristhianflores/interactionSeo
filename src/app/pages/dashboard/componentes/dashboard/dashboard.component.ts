import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/agregar-trabajo', title: 'Trabajos',  icon: 'dashboard', class: '' },
  { path: '/lista-curriculums', title: 'Carreras',  icon: 'dashboard', class: '' },
  { path: '/agregar-blog', title: 'Blogs',  icon:'person', class: '' },
  { path: '/agencia', title: 'Agencia',  icon:'content_paste', class: '' },
  { path: '/home', title: 'Home',  icon:'library_books', class: '' }
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit(){
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
}
