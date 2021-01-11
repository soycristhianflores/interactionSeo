import { Component, OnInit } from '@angular/core';

import { TrabajoService } from '../../../services/trabajo.service';
import { RootObject, Trabajo } from '../../../interface/trabajo';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos : Trabajo[] = [];
  loading : boolean;
  constructor(private trabajoService: TrabajoService) {}




  ngOnInit(){
    this.trabajoService.getTrabajo()
    .subscribe( resp => {
      this.trabajos = resp.trabajos;
      if(this.trabajos){
        this.loading = false;
      }
      console.log(resp);
    })
  }

}
