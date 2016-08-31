import { GettingStartedSectionComponent } from './components/getting-started/getting-started.component';
import { ClockSectionComponent } from './components/clock-section.component';
import { TimerSectionComponent } from './components/timer-section';

import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
  {
    path: '',
    data: ['Getting started'],
    component: GettingStartedSectionComponent
  }, {
    path: 'clock',
    data: ['Clock'],
    component: ClockSectionComponent
  }, {
    path: 'timer',
    data: ['Timer'],
    component: TimerSectionComponent
  }, {
    path: '**',
    redirectTo: '/'
  }
];

export const routing = RouterModule.forRoot(routes, { useHash : true });