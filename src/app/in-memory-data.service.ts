import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn:'root',
})

export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const polos = [
      { id: 10, name: 'Nizzlo' },
      { id: 11, name: 'Siripala' },
      { id: 12, name: 'Datguy' },
      { id: 13, name: 'KJmobster' },
      { id: 14, name: 'PamuPamu' },
    
    ];
    return {polos};
  }

   genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}