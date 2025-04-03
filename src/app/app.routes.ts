// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';

export const routes: Routes = [
  { path: '', component: CharacterlistComponent },
  { path: 'filter', component: CharacterfilterComponent },
  { path: 'character/:id', component: CharacterdetailsComponent },
  { path: '**', redirectTo: '' }
];
