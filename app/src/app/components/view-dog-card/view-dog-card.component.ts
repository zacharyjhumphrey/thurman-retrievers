import { Component, Input, OnInit } from '@angular/core';
import * as Color from 'color';
import { Dog, Sex } from '../../constants/Dog';

const DEFAULT_DOG: Dog = {
  name: 'name',
  color: new Color('#000000'),
  description: ['description'],
  sex: Sex.M,
  isAvailable: false,
};

// TODO Dog imagss at the bottom of the page need to flex width to 100% adn auto height
// TODO Turn dog names into flex boxes
// TODO Sections are being clipped when screen is too small
// TODO Add picture of Mel
// TODO Add Thurman picture
// TODO Center family picture

@Component({
  selector: 'app-view-dog-card',
  templateUrl: './view-dog-card.component.html',
  styleUrls: ['./view-dog-card.component.css'],
})
export class ViewDogCardComponent implements OnInit {
  @Input() dogInfo = DEFAULT_DOG;

  constructor() {}

  ngOnInit(): void {}
}
