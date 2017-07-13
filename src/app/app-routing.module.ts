import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'characters', component: CharactersComponent },
	{ path: 'detail/:id', component: CharacterDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }