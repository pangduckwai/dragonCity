import { Component, Input, AfterViewChecked } from '@angular/core';
import * as d3 from 'd3';

import { Character, ATTRIBUTES } from './character';
import { CharacterService } from './character.service';

@Component({
	selector: 'char-chart',
	templateUrl: './character-chart.component.html',
	styleUrls: [ './character-chart.component.css' ]
})

export class CharacterChartComponent implements AfterViewChecked {
	@Input() character: Character;

	ngAfterViewChecked(): void {
		this.renderStat(this.character);
	}

	renderStat(char: Character): void {
		let iid = ('00' + char.id).slice(-3);

		let grph = d3.select("#c"+iid).select(".viz");

		let scaleX = d3.scalePoint().range([0, 69]).domain(ATTRIBUTES);
		let scaleY = d3.scaleLinear().range([27, 0]).domain([0, 9]);
		let scaleZ = d3.scaleLinear().range([27, 0]).domain([0, 99]);

		for (let attr of ATTRIBUTES) {
			if (attr == '-') continue;
			let ypos = (attr.length > 3) ? scaleZ(char[attr]) : scaleY(char[attr]);
			let offs = (attr.length > 3) ? 3 : 0;
			let bar = grph.select("."+attr);
			if (bar.empty()) {
				bar = grph.append("rect").attr("class", attr).attr("x", scaleX(attr) + offs).attr("width", "5")
					.style("fill", ((attr.length > 3) ? "#777777" : "#607D8B"));
			}
			bar.attr("y", ypos).attr("height", 27 - ypos);
		}
	}
}