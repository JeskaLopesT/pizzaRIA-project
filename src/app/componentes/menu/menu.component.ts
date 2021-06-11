import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

 
  }

  title = 'Ola Mundo';
  recado = 'precisarei sair pois tenho uma reunião chata!!!';
  apareca: boolean = false;

  nomes = ["Cris", "Marcelo", "Jess", "Camis"];


  mostrarTamanhoArray(){
    if(this.apareca == false){
      this.apareca = true
    }else {
      this.apareca = false
    }

    console.log(this.nomes.length);
  }
}
