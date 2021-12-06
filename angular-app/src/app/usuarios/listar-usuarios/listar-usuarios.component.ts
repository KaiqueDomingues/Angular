import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarioSelecionadoPai = null;
  seEhMaiorQue18: boolean =false;
  diaDeHoje = new Date;
  
  usuarios = [
    { nome: "Kaique", sobrenome: "Freitas", idade: 25, nascimento: 1995-12-30 },
    { nome: "Mirela", sobrenome: "Sato", idade: 15, nascimento: 1997/3/20 },
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
