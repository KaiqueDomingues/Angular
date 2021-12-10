import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professores.service';


@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css']
})
export class ListarProfessoresComponent implements OnInit {


  professores: any = null;

  constructor(private professoresService: ProfessoresService) {
  }

  ngOnInit(): void {
    this.professoresService.getAllpro()
      .subscribe(
        (dados) => {
          console.log(dados);
          this.professores = dados;
        }
      );
  }

}
