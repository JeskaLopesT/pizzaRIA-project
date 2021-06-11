import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor( private http:HttpClient) { }

  url:string = environment.baseUrl

  getAll(): Observable<Pedido[]>{
    console.log(this.http.get<Pedido[]>(`${this.url}pedido`))
    return this.http.get<Pedido[]>(`${this.url}pedido`)
  }

  getAllById(id:number): Observable<Pedido>{
    console.log(this.http.get<Pedido>(`${this.url}pedido`))
    return this.http.get<Pedido>(`${this.url}pedido/${id}`)
  }

  postPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.url}pedido`, pedido)
  }

  putPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(`${this.url}pedido`, pedido)
  }

  deletePedido(id: number) {
    return this.http.delete(`${this.url}pedido/${id}`)
  }
}
