import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { RootObject, Carrera } from '../../../interface/carrera';
import { CarreraService } from '../../../services/carrera.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileList;
  progress: { percentage: number } = { percentage: 0 };

  public status: String;
  public carrera : Carrera;

  constructor(private carreraService: CarreraService) { 
    
  }

  ngOnInit(){
    this.carrera = {
      nombre: '',
      email: '',
      comentario: '',
      adjunto: []
    }
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles;  

    for (let i = 0; i < this.currentFileUpload.length; i++) {
      this.carreraService.pushFileToStorage(this.currentFileUpload[i]).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('listo');
        }
      });
      
    }
  
    this.selectedFiles = undefined;
  }

  onSaveCarrera(form: NgForm): void{
    const array = this.selectedFiles;
    let adjunto = [];
    for (let i = 0; i < array.length; i++) {
      
      var str1 = new String( "https://interaction-angular-carreras.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (array[i].name ).split(" ").join("+")); 
      var str3 = str1.concat(str2.toString());
      
      adjunto.push(str3);
      
    }
    
    this.carrera.adjunto = adjunto;
    console.log(this.carrera);


    this.carreraService.addCarrera(this.carrera).subscribe(response => console.log(response));

    this.upload();
    form.reset();
  }
}
