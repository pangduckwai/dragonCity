import { Component, Input } from '@angular/core';

import { Character } from './character';
import { CharacterImageService } from './character-image.service';

@Component({
	selector: 'char-image',
	templateUrl: './character-image.component.html'
})

export class CharacterImageComponent {
	@Input() character: Character;
	@Input() width: number = -1;

	constructor(private characterImageService: CharacterImageService) { }

	getUrl() {
		if (this.character.id >= 0) {
			let cid = ('00' + this.character.id).slice(-3);
			if (this.characterImageService.displayed.has(this.character.id)) {
				console.log("Getting next image of ", this.character.id);
				let nxt = this.characterImageService.displayed.get(this.character.id);
				return `/assets/img/c${cid}-${nxt}.png`;
			} else {
				console.log("Getting image of ", this.character.id);
				return `/assets/img/c${cid}.png`;
			}
		} else {
			return '/assets/img/cnew.png';
		}
	}

	onLoad() {
		console.log("Loaded image of ", this.character.id);
//		if (this.characterImageService.displayed.has(this.character.id)) {
//			this.characterImageService.next(this.character);
//		}
//		this.cdr.detach();
	}

	onErr() {
		console.log("Image not found for ", this.character.id);
		if (this.characterImageService.displayed.has(this.character.id)) {
			console.log("Moving to next image of ", this.character.id);
			let nxt = this.characterImageService.displayed.get(this.character.id) + 1;
			if (nxt > 9) nxt = 0;
			this.characterImageService.displayed.set(this.character.id, nxt);
		} else {
			console.log("Getting first image of ", this.character.id);
			this.characterImageService.displayed.set(this.character.id, 0);
		}
	}
}