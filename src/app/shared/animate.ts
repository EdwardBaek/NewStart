import { animation, style, animate, keyframes } from '@angular/animations';

export const flyInFromLeft = animation([
  animate( '{{ duration }}', 
    keyframes([
      style( { opacity: 0 , transform: 'translateX( -100% )', offset: 0}), 
      style( { opacity: 1 , transform: 'translateX( 15px )', offset: 0.3}), 
      style( { opacity: 1 , transform: 'translateX( 0 )', offset: 1.0}), 
  ]))
],
{ delay: 0 , params: { duration: '350ms' } }
);

export const flyOutToRight = animation([
animate( '{{ duration }}', 
  keyframes([
    style( { opacity: 1 , transform: 'translateX( 0 )', offset: 0}), 
    style( { opacity: 1 , transform: 'translateX( -15px )', offset: 0.7}), 
    style( { opacity: 0 , transform: 'translateX( 100% )', offset: 1.0}), 
]))
],
{ delay: 0 , params: { duration: '350ms' } }
);