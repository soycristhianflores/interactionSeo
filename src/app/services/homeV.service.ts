import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest  } from '@angular/common/http';
import { HomeV, RootObject } from '../interface/homeV';
import { Observable } from 'rxjs';

const url = `https://siteinteractionbackend.herokuapp.com/api/get-homeV`;

@Injectable({
  providedIn: 'root'
})
export class HomeVService {

  constructor(private http: HttpClient) { }

  getHomeV() {
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/get-homeV'); 
  }

 
  getHomeVId(idBlog: string){
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/buscar-homeV/'+idBlog); 
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://siteinteractionbackend.herokuapp.com/api/files/upload-homeV', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    console.log(req);

    return this.http.request(req);

  }

  addHomeV(formulario){
    return this.http.post<HomeV>('https://siteinteractionbackend.herokuapp.com/api/add-homev/',formulario);  
  }
}


