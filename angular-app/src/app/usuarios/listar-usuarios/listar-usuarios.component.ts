import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios = [
    { nome: 'Kaique',sobrenome: 'Freitas', idade:25 },
    { nome: 'Mirela', sobrenome: 'Sato', idade: 14 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
