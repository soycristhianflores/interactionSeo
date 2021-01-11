import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

import { Premio, Trabajo } from '../../../interface/trabajo';
import { CarreraService } from '../../../services/carrera.service';
import { TrabajoService } from '../../../services/trabajo.service';

@Component({
  selector: 'app-form-trabajo',
  templateUrl: './form-trabajo.component.html',
  styleUrls: ['./form-trabajo.component.css']
})
export class FormTrabajoComponent implements OnInit {

  
  selectedFiles: FileList;
  selectedFilesImg: FileList;
  selectedFilesLogo: FileList;
  selectedFilesPremio: FileList;
  currentFileUpload: FileList;
  categoria = new FormArray([]);
  premios = new FormArray([]);
  categoriaArray = [];
  premioArray = [];
  idTrabajo = 0;
  progress: { percentage: number } = { percentage: 0 };

  public formJob: Trabajo;

  formGroup: FormGroup;

  constructor( private formTrabajo: TrabajoService, private carreraService: CarreraService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup ({
      nombre: new FormControl(''),
      fecha: new FormControl(''),
      parrafo1: new FormControl(''),
      parrafo2: new FormControl(''),
      empresa: new FormControl(''),
      video: new FormControl(''),
      tittleSeo: new FormControl(''),
      descripcionSeo: new FormControl('')
      //premios: new FormArray([]),
      //name: new FormControl(''),
      //titulo: new FormControl(''),
      //tipo: new FormControl('')      
    })

    
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  selectFileImg(event){
    this.selectedFilesImg = event.target.files;
  }

  selectFileLogo(event){
    this.selectedFilesLogo = event.target.files;
  
  }

  selectFilePremio(event){
    this.selectedFilesPremio = event.target.files;
  
  }

  upload(imagen) {
    this.progress.percentage = 0;

    this.currentFileUpload = imagen;  

    for (let i = 0; i < this.currentFileUpload.length; i++) {
      this.carreraService.pushFileToStorageTrabajo(this.currentFileUpload[i]).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('listo');
        }
      });
      
    }
  
    //this.selectedFiles = undefined;
  }

  //formArray
  addSkill() {
       
    const group = new FormGroup({
        categorias: new FormControl(''),
    });
     
    
    this.categoria.push(group);
    console.log('cate',this.categoria);
  }

  addPremio() {
       
    const group = new FormGroup({
        titulo: new FormControl(''),
        tipo: new FormControl(''),
        img: new FormControl('')
    });
     
    this.premios.push(group);
    console.log('premios 1',this.premios);
  }

  //fin




  onSubmit() {
    

    const array = this.selectedFiles;
    let adjunto = '';
    for (let i = 0; i < array.length; i++) {
      
      var str1 = new String( "https://interactionangular.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (array[i].name ).split(" ").join("+")); 
      adjunto = str1.concat(str2.toString());
      
    }

    const arrayImg = this.selectedFilesImg;
    let adjuntoImg = '';
    for (let i = 0; i < arrayImg.length; i++) {
      
      var str1 = new String( "https://interactionangular.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (arrayImg[i].name ).split(" ").join("+")); 
      adjuntoImg = str1.concat(str2.toString());
      
    }

    const arrayLogo = this.selectedFilesLogo;
    let adjuntoLogo = '';
    for (let i = 0; i < arrayLogo.length; i++) {
      
      var str1 = new String( "https://interactionangular.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (arrayLogo[i].name ).split(" ").join("+")); 
      adjuntoLogo = str1.concat(str2.toString());
      
    }

    
    this.idTrabajo = Math.round(Math.random() * (3000 - 1) + 1);
    const ctrl = new FormControl(adjunto);
    const ctrlImg = new FormControl(adjuntoImg);
    const ctrlLogo = new FormControl(adjuntoLogo);
    const idTrabajo1 = new FormControl(this.idTrabajo);
    
    this.formGroup.addControl('idTrabajo',idTrabajo1);
    this.formGroup.addControl('imgEncabezado', ctrl);
    this.formGroup.addControl('img', ctrlImg);
    this.formGroup.addControl('imgEmpresa', ctrlLogo);


    console.log('form',this.formGroup.value,'categoria',this.categoria.value,'premios',this.premios.value)
        this.formTrabajo.addTrabajo(this.formGroup.value)
    .subscribe(
        res =>{
          this.upload(this.selectedFiles);
          this.upload(this.selectedFilesImg);
          this.upload(this.selectedFilesLogo);
          this.formGroup.reset();
          this.idTrabajo = undefined;
          console.log('enviado',res,' id trabao',this.idTrabajo)

          if(res){
            alert('Registrado con exito')
          }
        }
    );

  }

}
