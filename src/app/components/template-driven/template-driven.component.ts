import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  dados = {
    nome: '',
    idade: '',
    email: '',
    comfirmarEmail: ''
  };

  endereco = {
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    cep: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(formulario: NgForm){
    console.log(formulario);
    console.log(this.dados);

  }
}
