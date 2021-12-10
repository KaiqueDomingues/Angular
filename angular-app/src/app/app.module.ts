import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { UsuariosModule } from './usuarios/usuarios.module';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {IMaskModule} from 'angular-imask';
import { ListarPokemonsModule } from './pokemons/listar-pokemons.module';
import { ProfessoresModule } from './professores/professores.module';
import { FormulariosModule } from './formularios/formularios.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule,
    TooltipModule.forRoot(),
    IMaskModule,
    ListarPokemonsModule,
    ProfessoresModule,
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
