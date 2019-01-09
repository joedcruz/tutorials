import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    // const heroes = [
    //   { userId: 11, username: 'Mr. Nice' },
    //   { userId: 12, username: 'Narco' },
    //   { userId: 13, username: 'Bombasto' },
    //   { userId: 14, username: 'Celeritas' },
    //   { userId: 15, username: 'Magneta' },
    //   { userId: 16, username: 'RubberMan' },
    //   { userId: 17, username: 'Dynama' },
    //   { userId: 18, username: 'Dr IQ' },
    //   { userId: 19, username: 'Magma' },
    //   { userId: 20, username: 'Tornado' }
    // ];

    return {heroes};
  }

  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    // return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.userId)) + 1 : 11;
  }
}
