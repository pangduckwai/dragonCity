import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as d3 from 'd3';

import { Character, ATTRIBUTES } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'dc-characters',
	template: `
	<h2>Characters</h2>
	<div style="display:flex;">
		<ul class="heroes">
			<li *ngFor="let indv of chars"
					[class.selected]="indv === selectedChar"
					[id]="'c' + ('00' + indv.id).slice(-3)"
					(click)="onSelect(indv)">
				<span class="badge">{{('00' + indv.id).slice(-3)}}</span>{{indv.name}}
			</li>
		</ul>
		<div style="flex:2;">
			<char-detail [character]="selectedChar"></char-detail>
		</div>
	</div>`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			flex: 1;
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`]
})

export class CharactersComponent implements OnInit, AfterViewChecked {
	selectedChar: Character;
	chars: Character[];

	constructor(private characterService: CharacterService) { }

	onSelect(selected: Character): void {
		this.selectedChar = selected;
	}

	ngOnInit(): void {
		this.getCharacters();
	}

	getCharacters(): void {
		this.characterService.getCharacters().then(chars => this.chars = chars);
	}

	ngAfterViewChecked(): void {
		if (this.chars !== undefined) {
			for (let char of this.chars) {
				this.renderStat(char);
			}
		}
	}

	renderStat(char: Character): void {
		let iid = ('00' + char.id).slice(-3);

		let grph = d3.select("#c"+iid).select(".viz");
		if (grph.empty()) {
			grph = d3.select("#c"+iid)
				.append("svg").attr("class", "viz").attr("id", "s"+iid)
				.style("float", "right").style("max-width", "77px").style("height", "1.7em").style("margin-right", "5px");
		}

		let size = document.getElementById("s"+iid).getBoundingClientRect();
		let scaleX = d3.scalePoint().range([0, size.width - 8]).domain(ATTRIBUTES);
		let scaleY = d3.scaleLinear().range([size.height, 0]).domain([0, 9]);
		let scaleZ = d3.scaleLinear().range([size.height, 0]).domain([0, 99]);

		for (let attr of ATTRIBUTES) {
			if (attr == '-') continue;
			let ypos = (attr.length > 3) ? scaleZ(char[attr]) : scaleY(char[attr]);
			let offs = (attr.length > 3) ? 3 : 0;
			let bar = grph.select("."+attr);
			if (bar.empty()) {
				bar = grph.append("rect").attr("class", attr).attr("x", scaleX(attr) + offs).attr("width", "5")
					.style("fill", ((attr.length > 3) ? "#777777" : "#607D8B"));
			}
			bar.attr("y", ypos).attr("height", size.height - ypos);
		}
	}
}