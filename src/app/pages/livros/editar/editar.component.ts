import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';
import { ILivroModel } from 'src/app/shared/models/livro.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {


  formEdit: FormGroup;

  constructor(
    private cadastroService : LivrosService,
    private fb: FormBuilder,
    private router: Router) {
      this.formEdit = this.fb.group ({
        titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        autor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        numeroDePaginas: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        areaDeConhecimento: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
      })
   }

  ngOnInit(): void {

  }

  editarLivro (id: any, livro : ILivroModel) {
    if (this.formEdit.valid){
      this.cadastroService.editarLivros(livro).subscribe(result =>{
        id = result;
      });
    }
  }
}
