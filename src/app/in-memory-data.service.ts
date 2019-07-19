import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn:'root',
})

export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const polos = [
      { id: 11, name: 'Nizzlo' },
      { id: 12, name: 'Siripala' },
      { id: 13, name: 'Datguy' },
      { id: 14, name: 'KJmobster' },
      { id: 15, name: 'PamuPamu' },
    
    ];
    return {polos};
  }

   genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}