import { ILivroModel } from '../../shared/livro.model';
import { LivrosService } from '../../livros.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {


  livros: ILivroModel[] = [];

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros () {
    this.livrosService.listarLivros().subscribe (result => {
      this.livros = result;
    }, erro => {
      console.log('Erro ao listar os livros', erro);
    })
  }

}
