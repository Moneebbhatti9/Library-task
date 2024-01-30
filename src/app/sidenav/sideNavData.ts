export interface NavObject {
  routeLink: string;
  icon?: string;
  label: string;
  items?: NavObject[];
  expanded?: boolean;
}

export const navBarData: Array<NavObject> = [
  {
    routeLink: 'addBook',
    icon: 'fal fa-book',
    label: 'Add Book',
  },
  {
    routeLink: 'booklist',
    icon: 'fal fa-books',
    label: 'Book List',
  },
  {
    routeLink: 'issueBook',
    icon: 'fal fa-book-medical',
    label: 'Issue Book',
  },
  // {
  //   routeLink: 'issueBooklist',
  //   icon: 'fal fa-books-medical',
  //   label: 'Issue Book List',
  // },
];
