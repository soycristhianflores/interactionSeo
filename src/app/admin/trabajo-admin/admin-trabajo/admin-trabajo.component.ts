import { Component, OnInit } from '@angular/core';

import { Trabajo } from '../../../interface/trabajo';
import { TrabajoService } from '../../../services/trabajo.service';

@Component({
  selector: 'app-admin-trabajo',
  templateUrl: './admin-trabajo.component.html',
  styleUrls: ['./admin-trabajo.component.css']
})
export class AdminTrabajoComponent implements OnInit {

  trabajos : Trabajo[] = [];
  loading : boolean;

  
  constructor(private trabajoService: TrabajoService) { 
    this.loading =  true;
  }


  ngOnInit(): void {
    this.getTrabajos()
  }

  getTrabajos(){
    this.trabajoService.getTrabajo().subscribe(resp =>{
      this.trabajos = resp.trabajos;
      if(this.trabajos){
        this.loading = false;
      }
      console.log(resp)
    })
  }

}
