import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidmakersarg';

  @ViewChild('tabGroup') tabGroup: any;

  tabSelected = 0;

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router,
  ) {
    this.navLinks = [
      {
        label: 'Inicio',
        link: './inicio',
        icon: 'home',
        index: 0
      }, {
        label: 'Makers',
        link: './makers',
        icon: 'people',
        index: 1
      },
    ];
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabSelected = tabChangeEvent.index;

    switch (this.tabSelected) {
      case 0:
        this.router.navigate(['/inicio']);
        break;
      case 1:
        this.router.navigate(['/makers']);
        break;
      default:
        break;
    }
  }

}