import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'dc-character',
	templateUrl: './character.component.html'
})

export class CharacterComponent implements OnInit {
	@Input() character: Character;

	constructor(
		private characterService: CharacterService,
		private route: ActivatedRoute,
		private location: Location
	)  { }

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.characterService.getCharacter(+params.get('id')))
			.subscribe(char => this.character = char);
	}

	goBack(): void {
		this.location.back();
	}
}