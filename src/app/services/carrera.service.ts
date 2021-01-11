import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { RootObject, Carrera } from '../interface/carrera';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://siteinteractionbackend.herokuapp.com/api/files/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    console.log(req);

    return this.http.request(req);

  }

  pushFileToStorageTrabajo(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://siteinteractionbackend.herokuapp.com/api/files/upload-trabajo', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    console.log(req);

    return this.http.request(req);

  }

  addCarrera(formulario){
    return this.http.post<Carrera>('https://siteinteractionbackend.herokuapp.com/api/add-carrera/',formulario);  
  }
  getCarreras(){
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/get-carreras/');  
  }


}


