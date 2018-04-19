import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { animation, style, state, animate, trigger, transition, useAnimation, keyframes } from '@angular/animations';

const flyInFromLeft = animation([
    animate( '{{ duration }}', 
      keyframes([
        style( { opacity: 0 , transform: 'translateX( -100% )', offset: 0}), 
        style( { opacity: 1 , transform: 'translateX( 15px )', offset: 0.3}), 
        style( { opacity: 1 , transform: 'translateX( 0 )', offset: 1.0}), 
    ]))
  ],
  { delay: 0 , params: { duration: '350ms' } }
);
const flyOutToRight = animation([
  animate( '{{ duration }}', 
    keyframes([
      style( { opacity: 1 , transform: 'translateX( 0 )', offset: 0}), 
      style( { opacity: 1 , transform: 'translateX( -15px )', offset: 0.7}), 
      style( { opacity: 0 , transform: 'translateX( 100% )', offset: 1.0}), 
  ]))
],
{ delay: 0 , params: { duration: '350ms' } }
);

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('flyInOut',[
      state('*', style({transform: 'translateX(0)'})),
      transition(':enter', useAnimation(flyInFromLeft, { params: { duration: '325ms'}})),
      transition(':leave', useAnimation(flyOutToRight, { params: { duration: '325ms'}}))
    ])
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
