import { PokemonsService } from '../pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css']
})
export class ListarPokemonsComponent implements OnInit {

  pokemonSelecionadoPai: any = null;
  diaDeHoje = new Date();
  pokemons: any = null;
  offset: number = 0;
  limit: number = 30;

  constructor(private pokemonService:PokemonsService) { }

  ngOnInit(): void {
    this.pokemonService.getAll()
    .subscribe(
      (response) => {
        this.pokemons = response
      }
    );
  }

  onSelecionarClick(results: any) {
    this.pokemonSelecionadoPai = results;
  }

  receberIdFilho(variavel: any) {
    alert("O ID do Filho é " + variavel)
  }

  letrasMaiusculas(texto: any) {
    return texto.toUpperCase();
  }
}