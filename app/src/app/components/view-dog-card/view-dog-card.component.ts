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

@Component({
  selector: 'app-view-dog-card',
  templateUrl: './view-dog-card.component.html',
  styleUrls: ['./view-dog-card.component.css'],
})
export class ViewDogCardComponent implements OnInit {
  @Input() dogInfo: Dog = DEFAULT_DOG;

  constructor() {}

  ngOnInit(): void {}
}
