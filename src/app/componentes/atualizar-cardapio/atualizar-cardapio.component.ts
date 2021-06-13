import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio } from 'src/app/model/Cardapio';
import { CardapioService } from 'src/app/service/cardapio.service';

//TODO implementar alert

@Component({
  selector: 'app-atualizar-cardapio',
  templateUrl: './atualizar-cardapio.component.html',
  styleUrls: ['./atualizar-cardapio.component.css']
})
export class AtualizarCardapioComponent implements OnInit {

  cardapio: Cardapio = new Cardapio();
  idCardapio: number
  borda: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardapioService: CardapioService) { }

  ngOnInit() {
    this.idCardapio = this.route.snapshot.params["id"]
    this.findById(this.idCardapio)
    
  }


  findById(id: number) {
    this.cardapioService.getAllById(id).subscribe((resp: Cardapio) => {
      //fazer isso aqui funcionar direito 
      this.cardapio = resp

      if (!this.cardapio.bordaRecheada) {
        this.borda = 'Não'
      }
      else {
        this.borda = 'Sim'
      }
      console.log(this.cardapio)
    })
  }

  atualizarCardapio() {
    if (this.borda.toLowerCase() === "sim") {
      this.cardapio.bordaRecheada = true;
    } else {
      this.cardapio.bordaRecheada = false;
    }

    this.cardapioService.putCardapio(this.cardapio).subscribe((resp: Cardapio) => {
      console.log('cardapio', this.cardapio)
      this.router.navigate(['/cardapio'])
    })
  }

}
