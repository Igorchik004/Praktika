import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Пінтоха Надія Ярославівна' },
      { id: 2, name: 'Федеріко Ігор Богданович' },
      { id: 3, name: 'Фуштор Владислав Миколайович' },
      { id: 4, name: 'Сидоренко Михайло Васильович' },
      { id: 5, name: 'Коваленко Юрій Сергійович' },
      { id: 6, name: 'Захарченко Ірина Олександрівна' },
      { id: 7, name: 'Мельник Вікторія Олексіївна' },
      { id: 8, name: 'Дорошенко Тарас Володимирович' },
      { id: 9, name: 'Гаврилюк Ольга Іванівна' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}