import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'characters', component: CharactersComponent },
	{ path: 'detail/:id', component: CharacterComponent },
	{ path: 'newchar', component: CharacterComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }