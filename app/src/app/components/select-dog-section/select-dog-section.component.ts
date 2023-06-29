import { Component, OnInit } from '@angular/core';
import * as Color from 'color';
import { Dog, Sex } from '../../constants/Dog';

@Component({
  selector: 'app-select-dog-section',
  templateUrl: './select-dog-section.component.html',
  styleUrls: ['./select-dog-section.component.css'],
})
export class SelectDogSectionComponent implements OnInit {
  readonly DOG_INFO: Dog[] = [
    {
      name: 'Dolly',
      color: new Color('pink'),
      description: ['The princess of the bunch, this beautiful girl has never met someone she doesn’t like. Super playful and smart.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Willie',
      color: new Color('yellow'),
      description: ['Big Willie! Loves to eat and nap. The biggest (and most cuddly) of the litter.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Waylon',
      color: new Color('green'),
      description: ['Waylon loves people and always wants to be where the action is taking place. Loves using shoes as a pillow.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Merle',
      color: new Color('grey'),
      description: ['He can be a little shy, but once Merle gets comfortable he wants to be your best friend! A calm temperament and a red coat.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Hank',
      color: new Color('brown'),
      description: ['What Hank, the runt of the litter, lacks in size he makes up for in personality and cuteness. A people-pleaser with loads of charisma and a wavy coat.'],
      sex: Sex.M,
      isAvailable: true,
    },
  ];

  dogs: Dog[]; // Sorted dogs
  currentDog: Dog;

  constructor() {
    this.dogs = this.sortDogsByAvailability(this.DOG_INFO);
    this.currentDog = this.dogs[0];
  }

  ngOnInit(): void {}

  selectDog(i: number): void {
    this.currentDog = this.dogs[i];
  }

  public getCTAText() {
    if (!this.currentDog.isAvailable) {
      return `No Longer Available` 
    }

    return `I Want ${ this.currentDog.sex === 'Male' ? 'Him' : 'Her' }!`
  }

  private sortDogsByAvailability(allDogs: Dog[]): Dog[] {
    let availableDogs = allDogs.filter((dog) => dog.isAvailable);
    let unavailableDogs = allDogs.filter((dog) => !dog.isAvailable);
    return availableDogs.concat(unavailableDogs);
  }
}
