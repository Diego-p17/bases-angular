import { CommonModule } from '@angular/common';
import { components } from './components';
import { NgModule } from '@angular/core';
import { pages } from './pages';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ...pages,
    ...components,
  ],
  exports: [...pages],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
