import { Component, Input } from '@angular/core';

import { Character } from './character';

@Component({
	selector: 'char-image',
	templateUrl: './character-image.component.html'
})

export class CharacterImageComponent {
    @Input() character: Character;
    @Input() extension: string;
    @Input() width: number;
}