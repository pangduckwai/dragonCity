import { Component, Input } from '@angular/core';

import { Character } from './character';

@Component({
	selector: 'char-image',
	templateUrl: './character-image.component.html'
})

export class CharacterImageComponent {
	@Input() character: Character;
	@Input() width: number = -1;

	getCid() {
		return ('00' + this.character.id).slice(-3);
	}

	getUrl() {
		if (this.character.id >= 0) {
			return `/assets/img/c${this.getCid()}.png`;
		} else {
			return '/assets/img/cnew.png';
		}
	}

	// TODO:NOTE -- event handler sample code
	// errorHandler(event: any) {
	// 	event.stopPropagation();
	// 	console.log("Hello >:P", event);
	// }
}