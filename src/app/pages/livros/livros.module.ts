import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    CadastroComponent,
    EditarComponent,
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LivrosModule { }
