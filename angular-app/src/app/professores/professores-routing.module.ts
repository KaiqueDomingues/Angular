import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfessoresComponent } from './listar-professores/ListarProfessoresComponent';

const routes: Routes = [
  { path : 'professores' , component: ListarProfessoresComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }