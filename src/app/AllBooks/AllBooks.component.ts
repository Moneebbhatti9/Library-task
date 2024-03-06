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
  sortBy: string = '';
  sortAsc: boolean = true;

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

  sortBooks(sortOption: string) {
    if (this.sortBy === sortOption) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
    }
    this.sortBy = sortOption;

    if (sortOption === 'title') {
      this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'author') {
      this.filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortOption === 'category') {
      this.filteredBooks.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOption === 'Id') {
      this.filteredBooks.sort((a, b) =>
        this.sortAsc ? a.id - b.id : b.id - a.id
      );
    }
  }
}
