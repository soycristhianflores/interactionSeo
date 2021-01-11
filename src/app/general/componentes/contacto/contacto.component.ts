import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { TrabajoService } from '../../../services/trabajo.service';
import { NgForm } from '@angular/forms';
import { Contacto } from '../../../interface/trabajo';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  public contacto : Contacto;

  constructor(@Inject(forwardRef(() => TrabajoService )) public contactService: TrabajoService) { }


  ngOnInit(): void {
    this.contacto = {
      nombre: '',
      empresa: '',
      correo: '',
      asunto: '',
      consulta: ''
    }
  }


  onSaveContacto(form: NgForm): void{

      var enviar = 1;

      if (this.contacto.nombre == "") {
        swal.fire('Error',"Por favor llenar el campo Nombre antes de Continuar",'error');
        enviar = 0;
      }

      if(this.contacto.empresa == ""){
        swal.fire('Error',"Por favor llenar el campo Empresa antes de Continuar",'error');
        enviar = 0;
      }

      if(this.contacto.correo == ""){
        swal.fire('Error',"Por favor llenar el campo Correo antes de Continuar",'error');
        enviar = 0;
      }

      if(this.contacto.asunto == ""){
        swal.fire('Error',"Por favor llenar el campo Asunto antes de Continuar",'error');
        enviar = 0;
      }

      if(this.contacto.consulta == ""){
        swal.fire('Error',"Por favor llenar el campo Consulta antes de Continuar",'error');
        enviar = 0;
      }
    

      if(enviar == 1){

        this.contactService.addContacto(form.value).subscribe( 
          response =>{
             console.log('exito', response);
             form.reset();
             if(response){
               swal.fire('Enviado','Su mensaje se envio con exito!','success')
             }
             
          }
        );
      console.log(' formulario ',form.value,'enviar',enviar);
  

      }


  }




}
