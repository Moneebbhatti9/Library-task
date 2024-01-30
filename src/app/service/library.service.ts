import { Injectable } from '@angular/core';
import { Book } from '../modal/BookModal';
import { IssuedBook } from './../modal/IssuedBook';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor() {}

  books: Book[] = [];
  issuedBooks: IssuedBook[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  issueBook(bookId: any, userName: any, issueDate: any): Book | undefined {
    console.log(this.books, 'books', bookId);

    debugger;

    const book = this.books.find((b) => b.id == bookId);

    if (book && book.status == 1) {
      book.status = 0;
      this.issuedBooks.push({
        userName,
        issuedBooks: book.title,
        date: issueDate,
      });
    }
    console.log('Issue Book Array: ', this.issuedBooks);
    return book;
  }

  getUsersWithIssuedBooks(): IssuedBook[] {
    return this.issuedBooks;
  }
}
