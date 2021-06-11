import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cardapio } from '../model/Cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor( private http:HttpClient) { }

  url:string = environment.baseUrl

  getAll(): Observable<Cardapio[]>{
    console.log(this.http.get<Cardapio[]>(`${this.url}cardapio`))
    return this.http.get<Cardapio[]>(`${this.url}cardapio`)
  }

  getAllById(id:number): Observable<Cardapio>{
    console.log(this.http.get<Cardapio>(`${this.url}cardapio`))
    return this.http.get<Cardapio>(`${this.url}cardapio/${id}`)
  }

  getAllByPreco(preco:number): Observable<Cardapio[]>{
    console.log(this.http.get<Cardapio[]>(`${this.url}cardapio`))
    return this.http.get<Cardapio[]>(`${this.url}cardapio/por-preco/${preco}`)
  }
  
  postCardapio(cardapio: Cardapio): Observable<Cardapio>{
    return this.http.post<Cardapio>(`${this.url}cardapio`, cardapio)
  }

  putCardapio(cardapio: Cardapio): Observable<Cardapio>{
    return this.http.put<Cardapio>(`${this.url}cardapio`, cardapio)
  }

  deleteCardapio(id: number) {
    return this.http.delete(`${this.url}cardapio/${id}`)
  }
  
} 
