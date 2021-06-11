import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio } from 'src/app/model/Cardapio';
import { CardapioService } from 'src/app/service/cardapio.service';
import { CardapioComponent } from '../cardapio/cardapio.component';

@Component({
  selector: 'app-atualizar-cardapio',
  templateUrl: './atualizar-cardapio.component.html',
  styleUrls: ['./atualizar-cardapio.component.css']
})
export class AtualizarCardapioComponent implements OnInit {

  cardapio: Cardapio[]

  constructor( private route: ActivatedRoute, private router:Router, private cardapioService:CardapioService) { }

  ngOnInit() {
  }

  atualizarCardapio(){

  }










   /* atualizar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  } */

}
