import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest  } from '@angular/common/http';
import { Blog, RootObject } from '../interface/blog';
import { Observable } from 'rxjs';

const url = `https://siteinteractionbackend.herokuapp.com/api/get-blog`;

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlog() {

    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/get-blog'); 

    
  }

 
  getBlogId(idBlog: string){
    return this.http.get<RootObject>('https://siteinteractionbackend.herokuapp.com/api/buscarblog/'+idBlog); 
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://siteinteractionbackend.herokuapp.com/api/files/upload-blog', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    console.log(req);

    return this.http.request(req);

  }

  addBlog(formulario){
    return this.http.post<Blog>('https://siteinteractionbackend.herokuapp.com/api/add-carrera/',formulario);  
  }
}


