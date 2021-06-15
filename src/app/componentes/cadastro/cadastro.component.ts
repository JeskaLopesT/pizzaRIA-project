import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {

  }
  salvar() {
      this.service.postCliente(this.cliente).subscribe((resp: Cliente) => {
    console.log(resp);
    this.router.navigate(['/cardapio'])
  })}

}