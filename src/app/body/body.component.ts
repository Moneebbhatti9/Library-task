import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  getBodyClass = (): string => {
    let styleClass: string = '';

    if (this.collapsed && this.screenWidth > 786) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 786 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
  };
}
