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
      name: 'Bear',
      color: new Color('#7645d1'),
      description: ['He’s his own person.'],
      sex: Sex.M,
      isAvailable: false,
    },
    {
      name: 'Buzz',
      color: new Color('#4547d1'),
      description: ['He is probably (definitely) taking a nap right now.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Thor',
      color: new Color('#45bed1'),
      description: ['Snuggle King.'],
      sex: Sex.M,
      isAvailable: false,
    },
    {
      name: 'Simba',
      color: new Color('#d18d45'),
      description: [
        'A LOT of fun. Enjoys playing with his siblings and sleeping in his water bowl.',
      ],
      sex: Sex.M,
      isAvailable: false,
    },
    {
      name: 'Belle',
      color: new Color('#081a18'),
      description: ['Future CEO.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Elsa',
      color: new Color('#47e65a'),
      description: ['A queen, and she knows it.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Cinderella',
      color: new Color('#8f8f8f'),
      description: ['A gentle soul with lots of love to give.'],
      sex: Sex.F,
      isAvailable: false,
    },
    {
      name: 'Ariel',
      color: new Color('#f07fd5'),
      description: [
        'She just wants to be held...and fed treats. Lots and lots of treats.',
      ],
      sex: Sex.F,
      isAvailable: false,
    },
    {
      name: 'Moana',
      color: new Color('#d1be45'),
      description: ['The prettiest girl at the party.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Ana',
      color: new Color('#d14545'),
      description: ['Small but mighty.'],
      sex: Sex.F,
      isAvailable: false,
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

  private sortDogsByAvailability(allDogs: Dog[]): Dog[] {
    let availableDogs = allDogs.filter((dog) => dog.isAvailable);
    let unavailableDogs = allDogs.filter((dog) => !dog.isAvailable);
    return availableDogs.concat(unavailableDogs);
  }
}
