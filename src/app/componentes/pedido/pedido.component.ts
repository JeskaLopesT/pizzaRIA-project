import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/model/Cardapio';
import { Cliente } from 'src/app/model/Cliente';
import { Pedido } from 'src/app/model/Pedido';
import { CardapioService } from 'src/app/service/cardapio.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  listaPedido: Pedido[]
  cardapio: Cardapio = new Cardapio()
  pedido: Pedido
  pedidoUnico: Pedido
  

  constructor(
    private service: PedidoService,
  
  ) { }

  ngOnInit() {
    this.findAll()
  }

  findAll(){
    this.service.getAll().subscribe(( resp: Pedido[])=>{
      this.listaPedido = resp
      console.log(this.listaPedido)
    })
  }

  getById(){
    this.service.getAllById(this.pedido.id).subscribe((resp: Pedido)=>{
      this.pedidoUnico = resp
      console.log('pedidounico', resp)
    })
  }

}
