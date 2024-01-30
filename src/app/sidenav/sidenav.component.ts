import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  HostListener,
} from '@angular/core';
import { NavObject, navBarData } from './sideNavData';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '300ms',
          style({
            opacity: 1,
          })
        ),
      ]),

      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '300ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    trigger('rotate', [
      transition(
        ':enter',
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(1turn)', offset: '1' }),
          ])
        )
      ),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth: number = 0;
  sideNavData = navBarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.collapsed = this.screenWidth <= 786 ? false : true;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  // toggleSideBar = (): void => {
  //   this.collapsed = !this.collapsed;
  //   this.onToggleSideNav.emit({
  //     collapsed: this.collapsed,
  //     screenWidth: this.screenWidth,
  //   });
  // };

  // closeSideBar = (): void => {
  //   this.collapsed = false;
  //   this.onToggleSideNav.emit({
  //     collapsed: this.collapsed,
  //     screenWidth: this.screenWidth,
  //   });
  // };

  handleClick(item: NavObject) {
    if (!this.multiple) {
      for (let modelItem of this.sideNavData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveItemClass = (data: NavObject): string => {
    return this.router.url.includes(data.routeLink) ? 'active' : 'disabled';
  };
}
