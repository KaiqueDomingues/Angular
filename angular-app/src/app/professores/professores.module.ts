import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProfessoresComponent } from "./listar-professores/ListarProfessoresComponent";
import { SharedModule } from '../shared/shared.module';
import { ProfessoresRoutingModule } from './professores-routing.module';


@NgModule({
  declarations: [
    ListarProfessoresComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    //HttpClientModule,
    SharedModule
  ],
  exports:[
    ListarProfessoresComponent
  ]
})
export class ProfessoresModule { }
