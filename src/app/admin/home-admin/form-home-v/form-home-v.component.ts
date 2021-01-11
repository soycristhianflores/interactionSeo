import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HomeV } from '../../../interface/homeV';
import { HomeVService } from '../../../services/homeV.service';

@Component({
  selector: 'app-form-home-v',
  templateUrl: './form-home-v.component.html',
  styleUrls: ['./form-home-v.component.css']
})
export class FormHomeVComponent implements OnInit {

  public form: HomeV;
  selectedFiles: FileList;
  currentFileUpload: FileList;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private formHomeV: HomeVService, private homeService: HomeVService) { }

  ngOnInit(): void {
    this.form = {
      _id:'',
      nombre: '',
      texto1: '',
      texto1_2: '',
      enlace1: '',
      imagen: ''
    }
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles;  

    for (let i = 0; i < this.currentFileUpload.length; i++) {
      this.homeService.pushFileToStorage(this.currentFileUpload[i]).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('listo');
        }
      });
      
    }
  
    this.selectedFiles = undefined;
  }

  onSaveForm(formHomeV): void{
         
    const array = this.selectedFiles;

    for (let i = 0; i < array.length; i++) {
      var str1 = new String( "https://interactionangular.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (array[i].name ).split(" ").join("+")); 
      var str3 = str1.concat(str2.toString());
    }

    this.form.imagen = str3; 

    console.log(this.form);


  this.formHomeV.addHomeV(this.form)
  .subscribe(
      res =>{
        console.log('enviado',res)
        formHomeV.reset();
        if(res){
          alert('Registrado con exito')
        }
      }
  );
  this.upload();
}

}
