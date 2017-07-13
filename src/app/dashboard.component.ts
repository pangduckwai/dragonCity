import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'dc-dashboard',
	templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
	chars: Character[];

	constructor(private characterService: CharacterService) { }

	ngOnInit(): void {
		this.characterService.getCharacters().then(chars => this.chars = chars.slice(0, 4));
	}
}