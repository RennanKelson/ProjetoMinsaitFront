import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
