import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuedBooksListComponent } from './IssuedBooksList.component';
import { RouterModule } from '@angular/router';
import { IssueBookComponent } from './issueBook/issueBook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IssuedBooksListComponent, IssueBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'issueBook',
        component: IssueBookComponent,
      },
      {
        path: 'issueBooklist',
        component: IssuedBooksListComponent,
      },
    ]),
  ],
})
export class IssuedbooksModule {}
