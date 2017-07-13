import { Injectable } from '@angular/core';

import { Character } from './character';
import { CHARACTERS } from './characters';

@Injectable()
export class CharacterService {
	getCharacters(): Promise<Character[]> {
		//return Promise.resolve(CHARACTERS);
		return new Promise(resolve => {
			setTimeout(() => resolve(CHARACTERS), 1000);
		});
	}

	getCharacter(id: number):  Promise<Character> {
		return this.getCharacters().then(chars => chars.find(char => char.id === id));
	}
}