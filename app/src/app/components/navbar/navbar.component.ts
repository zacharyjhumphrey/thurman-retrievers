import { Component, OnInit } from '@angular/core';

/**
 * GOAL: Keep this element hidden until the user scrolls past the beginning section with a picture of mel
 * var screen size
 * var scrollY
 *
 * window.onresize -> set screen size
 *
 * isOnScreen() -> scrollY > screensize
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // private scrollY: number;
  // private screenSize: number;

  constructor() {}

  ngOnInit(): void {}

  isHeaderHidden(): boolean {
    return false;
  }
}
