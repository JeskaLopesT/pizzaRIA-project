import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/model/Cardapio';
import { Cliente } from 'src/app/model/Cliente';
import { Pedido } from 'src/app/model/Pedido';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  listaPedido: Pedido[]

  constructor(

    

  ) { }

  ngOnInit() {
  
  }


}
