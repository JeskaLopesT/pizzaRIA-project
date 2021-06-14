import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio } from 'src/app/model/Cardapio';
import { CardapioService } from 'src/app/service/cardapio.service';

@Component({
  selector: 'app-delete-cardapio',
  templateUrl: './delete-cardapio.component.html',
  styleUrls: ['./delete-cardapio.component.css']
})
export class DeleteCardapioComponent implements OnInit {

  cardapio: Cardapio
  idCardapio: number

  constructor(
    private route: ActivatedRoute,
    private cardapioService: CardapioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idCardapio = this.route.snapshot.params["id"]
    this.findById(this.idCardapio)
  }


  findById(id: number) {
    this.cardapioService.getAllById(id).subscribe((resp: Cardapio) => {
      //fazer isso aqui funcionar direito 
      this.cardapio = resp
      console.log(this.cardapio)
    })
  }

  deleteCardapio(){
    this.cardapioService.deleteCardapio(this.cardapio.id).subscribe(()=>{
      this.router.navigate(['/cardapio'])
    })
  }

}
