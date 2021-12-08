import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private http: HttpClient) { }

  getAllpro(){
    return this.http.get('http://cursos.grandeporte.com.br:8080/professores')
  }
}
