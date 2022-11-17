import { ILivroModel } from './../../../shared/models/livro.model';
import { LivrosComponent } from './../livros.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {


  formEdit: FormGroup;
  livro?: ILivroModel;

  constructor(
    private livrosService : LivrosService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.formEdit = this.fb.group ({
        id: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        autor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        numeroDePaginas: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        areaDeConhecimento: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
      })
   }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.livrosService.listarLivrosID(id).subscribe((result) => {
      this.livro = result;
      console.log(this.livro);
    });
  }

  editarLivro(){
    if (this.formEdit.valid){
      this.livrosService.editarLivros(Number(this.activatedRoute.snapshot.paramMap.get('id')),
        this.formEdit.value).subscribe(() => {
        this.router.navigate([""]);
      }, erro => {
        alert ("Não foi possível editar o livro!")});
    }
  }
}
