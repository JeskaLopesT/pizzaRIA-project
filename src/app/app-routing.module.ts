import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './componentes/cardapio/cardapio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SalvarCardapioComponent } from './componentes/salvar-cardapio/salvar-cardapio.component';

const routes: Routes = [

  { path: '', redirectTo:'cardapio', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio-salvar', component: SalvarCardapioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
