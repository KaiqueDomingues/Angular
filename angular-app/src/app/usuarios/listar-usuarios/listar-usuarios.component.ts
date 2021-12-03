import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarioSelecionadoPai = null;
  seEhMaiorQue18: boolean =false;
  
  usuarios = [
    { nome: "Kaique", sobrenome: "Freitas", idade: 25 },
    { nome: "Mirela", sobrenome: "Sato", idade: 15 },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onUsuarioClick(dados : any){
    console.log(dados);
    this.usuarioSelecionadoPai = dados;
  }

  metodoDoPai(evento : any){
    console.log("Esse é o metodo do pai...", evento)
    this.seEhMaiorQue18 = evento;
  }

}
