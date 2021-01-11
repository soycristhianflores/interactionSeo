import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, Contacto } from '../interface/trabajo';
import { Observable } from 'rxjs';

const url = `https://siteinteractionbackend.herokuapp.com/api/get-trabajo`;

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(private http: HttpClient) { }

  getTrabajo() {
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/get-trabajo'); 
  }

 
  getTrabajoId(idTrabajo: string){
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/buscarTrabajo/'+idTrabajo); 
  }

  addContacto(formulario: string){
    return this.http.post('https://siteinteractionbackend.herokuapp.com/api/add-contacto/',formulario); 
  }

  addTrabajo(formulario: string){
    return this.http.post('https://siteinteractionbackend.herokuapp.com/api/add-trabajo/',formulario); 
  }


}


