import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import * as d3 from 'd3';

import { Character, ATTRIBUTES } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'dc-characters',
	templateUrl: './characters.component.html',
	styleUrls: [ './characters.component.css' ]
})

export class CharactersComponent implements OnInit {
	selectedChar: Character;
	chars: Character[];

	constructor(
		private router: Router,
		private characterService: CharacterService) { }

	onSelect(selected: Character): void {
		this.selectedChar = selected;
	}

	onEdit(selected: Character): void {
		this.router.navigate(['/detail', selected.id]);
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedChar.id]);
	}

	ngOnInit(): void {
		this.getCharacters();
	}

	getCharacters(): void {
		this.characterService.getCharacters().then(chars => this.chars = chars);
	}
}