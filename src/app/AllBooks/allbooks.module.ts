import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './AllBooks.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './AddBook/AddBook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'addBook',
    component: AddBookComponent,
  },
  {
    path: 'booklist',
    component: AllBooksComponent,
  },
];

@NgModule({
  declarations: [AllBooksComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AllbooksModule {}
