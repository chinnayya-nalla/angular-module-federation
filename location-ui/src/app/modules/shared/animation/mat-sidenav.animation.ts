import { trigger, state, style, transition, animate } from '@angular/animations';


export const toggleSideNav = trigger('toggleSideNav', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '240px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const toggleSideNavContent = trigger('toggleSideNavContent', [
  state('close',
    style({
      'margin-left': '68px'
    })
  ),
  state('open',
    style({
      'margin-left': '240px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const toggleContent = trigger('toggleContent', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);

export const toggleSideNavButton = trigger('toggleSideNavButton', [
  state('close',
    style({
      'left': '47px'
    })
  ),
  state('open',
    style({
      'left': '230px'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);