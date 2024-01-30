import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/service/library.service';
import { Book } from '../modal/BookModal';

@Component({
  selector: 'app-AllBooks',
  templateUrl: './AllBooks.component.html',
  styleUrls: ['./AllBooks.component.css'],
})
export class AllBooksComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  books!: Book[];
  filteredBooks!: Book[] | any[];
  selectedFilter: string | null = null;

  ngOnInit() {
    this.filteredBooks = this.books = this.libraryService.getBooks();
  }

  filterBooks(filterOption: string) {
    this.selectedFilter = filterOption;

    if (filterOption === 'all') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter((book) => {
        return filterOption === 'available'
          ? book.status == 1
          : book.status == 0;
      });
    }
  }
}
