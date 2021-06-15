import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtualizarCardapioComponent } from './componentes/atualizar-cardapio/atualizar-cardapio.component';
import { CardapioComponent } from './componentes/cardapio/cardapio.component';
import { DeleteCardapioComponent } from './componentes/delete-cardapio/delete-cardapio.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { SalvarCardapioComponent } from './componentes/salvar-cardapio/salvar-cardapio.component';

const routes: Routes = [

  { path: '', redirectTo:'cardapio', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio-salvar', component: SalvarCardapioComponent },
  { path: 'cardapio-atualizar/:id', component: AtualizarCardapioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cardapio-deletar/:id', component: DeleteCardapioComponent },
  { path: 'pedido', component: PedidoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
