import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros: Array<any> = new Array ();

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros () {
    this.livrosService.listarLivros().subscribe (livros => {
      this.livros = livros;
    }, err => {
      console.log('Erro ao listar os livros', err);
    })
  }

}
