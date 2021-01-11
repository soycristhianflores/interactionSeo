import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest  } from '@angular/common/http';
import { HomeH, RootObject } from '../interface/homeH';
import { Observable } from 'rxjs';

const url = `https://siteinteractionbackend.herokuapp.com/api/get-homeH`;

@Injectable({
  providedIn: 'root'
})
export class HomeHService {

  constructor(private http: HttpClient) { }

  getHomeH() {
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/get-homeH'); 
  }

 
  getHomeHId(idBlog: string){
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/buscar-homeH/'+idBlog); 
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://siteinteractionbackend.herokuapp.com/api/files/upload-homeH', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    console.log(req);

    return this.http.request(req);

  }

  addHomeH(formulario){
    return this.http.post<HomeH>('https://siteinteractionbackend.herokuapp.com/api/add-homeh/',formulario);  
  }
}


