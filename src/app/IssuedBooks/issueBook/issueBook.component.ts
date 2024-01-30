import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from 'src/app/modal/BookModal';
import { IssuedBook } from 'src/app/modal/IssuedBook';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-issueBook',
  templateUrl: './issueBook.component.html',
  styleUrls: ['./issueBook.component.css'],
})
export class IssueBookComponent implements OnInit {
  bookIssuanceForm = new FormGroup({
    bookId: new FormControl(''),
    userName: new FormControl(''),
    issueDate: new FormControl(''),
  });

  constructor(public libraryService: LibraryService) {}

  books!: Book[];

  ngOnInit() {
    this.books = this.libraryService
      .getBooks()
      .filter((availableBook) => availableBook.status == 1);
  }

  getIssuedBooks(): IssuedBook[] {
    return this.libraryService.getUsersWithIssuedBooks();
  }

  onSubmit() {
    const { bookId, userName, issueDate } = this.bookIssuanceForm.value;

    console.log(issueDate);

    const issuedbook = this.libraryService.issueBook(
      bookId,
      userName,
      issueDate
    );

    this.bookIssuanceForm.reset();
  }
}
