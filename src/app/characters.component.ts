import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as d3 from 'd3';

import { Character, ATTRIBUTES } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'dc-characters',
	templateUrl: './characters.component.html',
	styleUrls: [ './characters.component.css' ],
	animations: [
		trigger('imgState', [
			state('normal', style({
				transform: 'scale(1)'
			})),
			state('focus',   style({
				transform: 'scale(3)'
			})),
			transition('normal => focus', animate('100ms ease-in')),
			transition('focus => normal', animate('100ms ease-out'))
		])
	]
})

export class CharactersComponent implements OnInit {
	selectedChar: Character;
	chars: Character[];
	state: string = 'normal';

	constructor(
		private router: Router,
		private characterService: CharacterService) { }

	onSelect(selected: Character): void {
		this.selectedChar = selected;
	}

	toggleState() {
		if (this.state === 'normal') {
			console.log("Before 1", this.state);
			this.state = 'focus';
		} else {
			console.log("Before 2", this.state);
			this.state = 'normal';
		}
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

	delete(char: Character): void {
		this.characterService.delete(char.id).then(() => {
			this.chars = this.chars.filter(h => h !== char);
			if (this.selectedChar === char) { this.selectedChar = null; }
		});
	}
}