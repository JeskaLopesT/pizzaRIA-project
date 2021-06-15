import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CardapioComponent } from './componentes/cardapio/cardapio.component';
import { AppRoutingModule } from './app-routing.module';
import { SalvarCardapioComponent } from './componentes/salvar-cardapio/salvar-cardapio.component';
import { FormsModule } from '@angular/forms';
import { AtualizarCardapioComponent } from './componentes/atualizar-cardapio/atualizar-cardapio.component';
import { DeleteCardapioComponent } from './componentes/delete-cardapio/delete-cardapio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PedidoComponent } from './componentes/pedido/pedido.component'


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardapioComponent,
    SalvarCardapioComponent,
    AtualizarCardapioComponent,
    HomeComponent,
    DeleteCardapioComponent,
    FooterComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
