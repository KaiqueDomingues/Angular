import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
//import { CpfPipe } from './cpf.pipe';
//import { GrifaTextoDirective } from './grifa-texto.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListarUsuariosComponent,
    DetalheUsuarioComponent,
    //CpfPipe,
    //GrifaTextoDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListarUsuariosComponent
  ]
})
export class UsuariosModule { }
