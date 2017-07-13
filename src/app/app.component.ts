import { Component } from '@angular/core';

@Component({
	selector: 'dragon-city',
	template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/dashboard">Dashboard</a>
		<a routerLink="/characters">Characters</a>
	</nav>
	<div>
		<router-outlet></router-outlet>
	</div>`
})

export class AppComponent {
	title = 'The Dragon City Saga';
}