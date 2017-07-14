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
			.switchMap((params: ParamMap) => {
					if (params.get('id')) {
						let cid = +params.get('id');
						return this.characterService.getCharacter(cid);
					} else {
						// create a very average person
						return Promise.resolve({
							id:-1, name:'',altr:'',str:4,sta:4,agt:4,dex:4,int:4,pct:4,wil:4,lck:4,chr:4,mele:30,arch:30,mark:30
						});
					}
				})
			.subscribe(char => this.character = char);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		if (!this.character.name.trim()) {
			alert("Please provide a name for your character");
			return;
		}

		if (this.character.id >= 0) {
			this.characterService.update(this.character).then(() => this.goBack());
		} else {
			this.characterService.create(this.character).then(() => this.goBack());
		}
	}
}