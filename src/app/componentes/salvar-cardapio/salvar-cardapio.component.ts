import { Cardapio } from './../../model/Cardapio';
import { CardapioService } from './../../service/cardapio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-cardapio',
  templateUrl: './salvar-cardapio.component.html',
  styleUrls: ['./salvar-cardapio.component.css']
})
export class SalvarCardapioComponent implements OnInit {

  cardapio: Cardapio = new Cardapio();

  borda: string;

  constructor(private service: CardapioService, private router: Router) { }

  ngOnInit() {
  }

  salvar() {
    if (this.borda.toLowerCase() === "sim") {
      this.cardapio.bordaRecheada = true;
    } else {
      this.cardapio.bordaRecheada = false;
    }

    console.log(this.cardapio)
    this.service.postCardapio(this.cardapio).subscribe((resp: Cardapio) => {
      console.log(resp);
      this.router.navigate(['/cardapio'])
    })
  }
}