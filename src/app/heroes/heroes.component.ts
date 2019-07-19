import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // heroes = HEROES;
  /*solo: Hero = {
    id: 1,
    name: "Nizzlo"
  }*/

 /* selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}*/

heroes: Hero[];

  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}