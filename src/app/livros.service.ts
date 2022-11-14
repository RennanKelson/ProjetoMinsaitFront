import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { ILivroModel } from './shared/livro.model';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) {}

  urlApi= environment.apiLivros;

  listarLivros() : Observable <ILivroModel[]> {
    return this.http.get<ILivroModel[]>(this.urlApi);
    }

}
