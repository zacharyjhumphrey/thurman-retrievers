import { Component, OnInit } from '@angular/core';
import * as Color from 'color';
import { Dog, Sex } from '../../constants/Dog';

@Component({
  selector: 'app-select-dog-section',
  templateUrl: './select-dog-section.component.html',
  styleUrls: ['./select-dog-section.component.css'],
})
export class SelectDogSectionComponent implements OnInit {
  // TODO Add Gabby's descriptions
  // TODO Fix saturation of colar colors
  readonly DOG_INFO: Dog[] = [
    {
      name: 'Bear',
      color: new Color('#7645d1'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.M,
      isAvailable: false,
    },
    {
      name: 'Buzz',
      color: new Color('#4547d1'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Thor',
      color: new Color('#45bed1'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.M,
      isAvailable: false,
    },
    {
      name: 'Simba',
      color: new Color('#d18d45'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.M,
      isAvailable: true,
    },
    {
      name: 'Belle',
      color: new Color('#081a18'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Elsa',
      color: new Color('#47e65a'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Cinderella',
      color: new Color('#8f8f8f'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Ariel',
      color: new Color('#f07fd5'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.F,
      isAvailable: false,
    },
    {
      name: 'Moana',
      color: new Color('#d1be45'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
      sex: Sex.F,
      isAvailable: true,
    },
    {
      name: 'Ana',
      color: new Color('#d14545'),
      description: ['Warning: Intense cuddler. This pup loves to snuggle up.'],
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
