import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Blog } from '../../../interface/blog';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent implements OnInit {

  public form: Blog;
  selectedFiles: FileList;
  currentFileUpload: FileList;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private formBlog: BlogService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.form = {
      _id:'',
      nombre: '',
      fecha: '',
      descripcion: '',
      descripcion2: '',
      idblog: 0,
      imgEncabezado: '',
      video: '',
      tittleSeo: '',
      descripcionSeo: '',
      format_detection: '',
      viewport: '',
      author: '',
      googlebot: '',
      robots: '',
      og_site_name: '',
      og_url: '',
      og_title: '',
      og_description: '',
      og_locale: '',
      og_type: '',
      fb_app_id: '',
      og_image: '',
      og_image_height: '',
      og_image_width: '',
      twitter_image: '',
      og_image_secure_url: '',
      twitter_card: '',
      twitter_title: '',
      twitter_description: '',
      twitter_creator: '',
      twitter_site: '',
      twitter_domain: '',
      article_publisher: '',
      article_tag: '',
      revisit_after: '',
      distribution: '',
      generator: '',
    }
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
    console.log('nombre img ',this.selectedFiles);
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles;  

    for (let i = 0; i < this.currentFileUpload.length; i++) {
      this.blogService.pushFileToStorage(this.currentFileUpload[i]).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('listo');
        }
      });
      
    }
  
    this.selectedFiles = undefined;
  }

  onSaveForm(formJob:NgForm): void{
         
    const array = this.selectedFiles;

    for (let i = 0; i < array.length; i++) {
      var str1 = new String( "https://interactionangular.s3.us-east-2.amazonaws.com/" ); 
      var str2 = new String( (array[i].name ).split(" ").join("+")); 
      var str3 = str1.concat(str2.toString());
    }
  this.form.imgEncabezado = str3;
  console.log(this.form);



  this.formBlog.addBlog(formJob.value)
  .subscribe(
      res =>{
        console.log('enviado',res)
        formJob.reset();
        if(res){
          alert('Registrado con exito')
        }
      }
  );
  console.log('exito',formJob.value);
  this.upload();
}

}
