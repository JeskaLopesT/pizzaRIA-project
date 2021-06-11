import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http:HttpClient) { }

  url:string = environment.baseUrl

  getAll(): Observable<Cliente[]>{
    console.log(this.http.get<Cliente[]>(`${this.url}cliente`))
    return this.http.get<Cliente[]>(`${this.url}cliente`)
  }

  getAllById(id:number): Observable<Cliente>{
    console.log(this.http.get<Cliente>(`${this.url}cliente`))
    return this.http.get<Cliente>(`${this.url}cliente/${id}`)
  }

  getAllByNome(nome:string): Observable<Cliente[]>{
    console.log(this.http.get<Cliente[]>(`${this.url}cliente`))
    return this.http.get<Cliente[]>(`${this.url}cliente/por-nome/${nome}`)
  }

  getAllByEmail(email:string): Observable<Cliente[]>{
    console.log(this.http.get<Cliente[]>(`${this.url}cliente`))
    return this.http.get<Cliente[]>(`${this.url}cliente/por-email/${email}`)
  }

  postCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}cliente`, cliente)
  }

  putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.url}cliente`, cliente)
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.url}cliente/${id}`)
  }
  
}
