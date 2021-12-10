import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesPokemonsComponent } from './detalhes-pokemons/detalhes-pokemons.component';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  declarations: [
    DetalhesPokemonsComponent,
    ListarPokemonsComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule,
    SharedModule,
    PokemonsRoutingModule
  ],
  exports: [
    ListarPokemonsComponent
  ]
})
export class ListarPokemonsModule { }
