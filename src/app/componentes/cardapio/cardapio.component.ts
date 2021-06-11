import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/model/Cardapio';
import { Pedido } from 'src/app/model/Pedido';
import { CardapioService } from 'src/app/service/cardapio.service';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  listaCardapio: Cardapio[]
  pedido: Pedido;

  constructor(
    private service: CardapioService,

  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.service.getAll().subscribe( (resp: Cardapio[])=>{
      this.listaCardapio = resp
    })
  }

}
