import { Component, OnInit } from '@angular/core';
import { HomeH } from '../../../../interface/homeH';
import { HomeV } from '../../../../interface/homeV';
import { HomeHService } from '../../../../services/homeH.service';
import { HomeVService } from '../../../../services/homeV.service';
declare const sliderHome: any;
import AOS from 'aos';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  homesH : HomeH[] = [];
  homesV : HomeV[] = [];

  constructor(private homeHService: HomeHService, private homeVService: HomeVService ) { }

  ngOnInit(){
    sliderHome()
    AOS.init({
      duration: 1200,
    });

    this.getHomeH();
    this.getHomeV();
  }

  getHomeH(){
    this.homeHService.getHomeH().subscribe(resp =>{
      this.homesH = resp.homesH;
      if(this.homesH){
      }
      console.log(resp)
    })
  }

  getHomeV(){
    this.homeVService.getHomeV().subscribe(resp =>{
      this.homesV = resp.homesV;
      if(this.homesV){
      }
      console.log(resp)
    })
  }

}
