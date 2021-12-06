import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesPokemonsComponent } from './detalhes-pokemons/detalhes-pokemons.component';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';



@NgModule({
  declarations: [
    DetalhesPokemonsComponent,
    ListarPokemonsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListarPokemonsComponent
  ]
})
export class ListarPokemonsModule { }
