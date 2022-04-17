import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter',  [
  style({
    opacity: 0,
    transform: 'translateX(-100%)'
  }),
  animate('600ms ease-in', style({
    opacity: 1,
    transform: 'translateX(0%)'
  }))
]);

export const fadeIn = trigger('fadeIn', [
  enterTransition
]);
