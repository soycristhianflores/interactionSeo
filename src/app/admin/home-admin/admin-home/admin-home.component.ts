import { Component, OnInit } from '@angular/core';
import { HomeH } from '../../../interface/homeH';
import { HomeV } from '../../../interface/homeV';
import { HomeHService } from '../../../services/homeH.service';
import { HomeVService } from '../../../services/homeV.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  homesH : HomeH[] = [];
  homesV : HomeV[] = [];
  loading : boolean;

  constructor(private homeHService: HomeHService, private homeVService: HomeVService ) { 
    this.loading =  true;
  }

  ngOnInit(): void {
    this.getHomeH();
    this.getHomeV();
  }

  getHomeH(){
    this.homeHService.getHomeH().subscribe(resp =>{
      this.homesH = resp.homesH;
      if(this.homesH){
        this.loading = false;
      }
      console.log(resp)
    })
  }

  getHomeV(){
    this.homeVService.getHomeV().subscribe(resp =>{
      this.homesV = resp.homesV;
      if(this.homesV){
        this.loading = false;
      }
      console.log(resp)
    })
  }

}
