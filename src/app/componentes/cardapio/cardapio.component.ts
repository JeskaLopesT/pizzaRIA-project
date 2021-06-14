import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cardapio: Cardapio;
  id: number;

  constructor(
    private service: CardapioService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.findAll()



  }

  findAll(){
    this.service.getAll().subscribe( (resp: Cardapio[])=>{
      this.listaCardapio = resp
      this.listaCardapio.sort((a,b)=>{
        return b.id - a.id
      })
    })
  }

  
}
