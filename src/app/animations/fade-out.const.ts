import { style, animate, transition, trigger } from '@angular/animations';

const leaveTransition = transition(':leave',  [
  style({
    opacity: 1,
    transform: 'translateX(0%)'
  }),
  animate('600ms ease-out', style({
    opacity: 0,
    transform: 'translateX(100%)'
  }))
])

export const fadeOut = trigger('fadeOut', [
  leaveTransition
]);
