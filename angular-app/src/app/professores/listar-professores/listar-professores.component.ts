import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css']
})
export class ListarProfessoresComponent implements OnInit {


  professores: any = null;

  constructor(private httpCliente:HttpClient) {

   }

  ngOnInit(): void {
    this.httpCliente.get('http://cursos.grandeporte.com.br:8080/professores')
      .subscribe(
        (dados)=>{
          console.log(dados)
          this.professores = dados;
        }
      );
  }

}
