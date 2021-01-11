import { Component, OnInit } from '@angular/core';

import { CarreraService } from "../../../services/carrera.service";
import { Carrera } from "../../../interface/carrera";
import { each } from 'jquery';

@Component({
  selector: 'app-listar-participantes',
  templateUrl: './listar-participantes.component.html',
  styleUrls: ['./listar-participantes.component.css']
})
export class ListarParticipantesComponent implements OnInit {
  carreras:Carrera[] = [];

 
  loading : boolean;
  carrerasFinal: any [];
  constructor(  private carrerasService:CarreraService) { 
    this.loading =  true;
  }
  

  ngOnInit(): void {
    this.getCarreras()
  }

  getCarreras(){
    this.carrerasService.getCarreras().subscribe(resp =>{
      
      this.carreras = resp.carreras;

      if(this.carreras){
        this.loading = false;
        
      }
      console.log(this.carreras)
      this.carreras['carreras'];

      
    })
    
  }


  

}
