import { Component, Input } from '@angular/core';

import { Character } from './character';

@Component({
	selector: 'char-detail',
	templateUrl: './character-detail.component.html',
	styleUrls: [ './character-detail.component.css' ]
})

export class CharacterDetailComponent {
	@Input() character: Character;
	@Input() readOnly: boolean = false;
}