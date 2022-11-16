import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ILivroModel } from '../shared/models/livro.model';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) {}

  urlApi= environment.apiLivros;

  listarLivros() : Observable <ILivroModel[]> {
    return this.http.get<ILivroModel[]>(this.urlApi);
  }

  listarLivrosID(id: number) : Observable <ILivroModel[]> {
    return this.http.get<ILivroModel[]>(`${this.urlApi}/${id}`);
  }

  removerLivros(id: number){
    return this.http.delete(`${this.urlApi}/${id}`).subscribe((result)=> {
      console.log(result)
    });
  }

  cadastroLivros(livro : ILivroModel) {
    return this.http.post(this.urlApi, livro)
  }

  editarLivros(livro : ILivroModel) {
    return this.http.put(this.urlApi, livro)
  }
}
