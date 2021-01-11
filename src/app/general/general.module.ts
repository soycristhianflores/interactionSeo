import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TrabajoComponent } from './componentes/trabajo/trabajo.component';
import { ScrollTopComponent } from './componentes/scroll-top/scroll-top.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MenuComponent, FooterComponent, TrabajoComponent, ScrollTopComponent, ContactoComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MenuComponent, FooterComponent, TrabajoComponent, ScrollTopComponent, ContactoComponent]

})
export class GeneralModule { }
