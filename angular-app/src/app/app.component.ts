import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  cor = 'vermelho';
  nome = 'Kaique';
  valorDigitado: any;
  resultado!: boolean;
  cpfDigitado: string = '';
  msgCpf: string = '';

  // botaoClick(){
  //   alert("Uma mensagem");
  //   this.cor = (this.cor == "azul" ? "vermelho": "azul");
  // }


  //inputKeyUp(input:any){
  //console.log(input.target.value);
  // this.valorDigitado = input.target.value;
  //console.log(this.valorDigitado);
  //}

  getValor(){
    return ('BRQ');
  }

  validaCPF(){
    console.log(this.testaCPF(this.valorDigitado))
    this.resultado = this.testaCPF(this.valorDigitado)
  }

  testaCPF(strCPF: string) {
    
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  onCpfBlur(){
    let cpfValido = this.testaCPF(this.cpfDigitado);

    this.msgCpf = (cpfValido ? "CPF é valido": "CPF não é valido");
    if(this.cpfDigitado == ''){
      this.msgCpf = ''
    }
  }

}

