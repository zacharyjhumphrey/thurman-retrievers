import * as Color from 'color';

export type Dog = {
  name: string;
  color: Color;
  isAvailable: boolean;
  description: string[];
  sex: Sex;
}

export enum Sex {
  M = 'Male',
  F = 'Female',
}
