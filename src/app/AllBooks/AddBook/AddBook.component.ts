import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Book } from 'src/app/modal/BookModal';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-AddBook',
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private libraryService: LibraryService) {
    this.bookForm = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(''),
      author: new FormControl(''),
      category: new FormControl(''),
      tags: new FormControl(''),
      status: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = {
        id: this.bookForm.get('id')!.value,
        title: this.bookForm.get('title')!.value,
        author: this.bookForm.get('author')!.value,
        category: this.bookForm.get('category')!.value,
        tags: this.bookForm.get('tags')!.value,
        status: this.bookForm.get('status')!.value,
      };

      this.libraryService.addBook(book);
      this.resetFormControls();
      console.log('Book Added', book);
    }
  }

  private resetFormControls(): void {
    this.bookForm.setValue({
      id: null,
      title: '',
      author: '',
      category: '',
      tags: '',
      status: null,
    });
  }
}
