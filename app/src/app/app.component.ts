import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  public isWelcomeSectionShown(): boolean {
    console.debug('Scroll Event', window.pageYOffset);
    return true;
  }
}
