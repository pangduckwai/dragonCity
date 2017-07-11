import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import * as d3 from 'd3';

@Component({
	selector: 'dragon-city',
	template: `
	<h1>{{title}}</h1>
	<h2>Characters</h2>
	<div style="display:flex;">
		<ul class="heroes">
			<li *ngFor="let indv of chars" [class.selected]="indv === selectedChar" [id]="indv.id" (click)="onSelect(indv)">
				<span class="badge">{{('00' + indv.id).slice(-3)}}</span> {{indv.name}}
			</li>
		</ul>
		<div style="flex:2;">
			<char-detail [character]="selectedChar"></char-detail>
		</div>
		<div style="flex:4;">
			<img src="/assets/img/c{{('00' + selectedChar.id).slice(-3)}}.jpg" width="560" alt=" "/>
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

export class AppComponent implements OnInit {
	title = 'The tales of Dragon City';

	selectedChar: Character;
	chars = CHARS;

	onSelect(selected: Character): void {
		this.selectedChar = selected;
	}

	ngOnInit() {
		for (let char of this.chars) {
			let gph = d3.select("#" + char.id).select(".viz");
			if (gph.empty()) {
				gph = d3.select("#" + char.id).append("svg").attr("class", "viz");
			}
			gph.append("text").attr("font-size", "0.8em").text(char.altr);
		}
	}
}

const CHARS: Character[] = [
	{id:1, name:'Lady Pteropus',altr:'Rachel Ross',         str:3,sta:4,agt:9,dex:8,int:9,pct:6,wil:8,lck:3,chr:9,mele:77,arch:20,mark:75},
	{id:2, name:'T.J.',         altr:'Trish Josié Michaels',str:4,sta:6,agt:8,dex:8,int:6,pct:7,wil:7,lck:6,chr:8,mele:85,arch:70,mark:82},
	{id:3, name:'Lee',                                      str:8,sta:8,agt:7,dex:9,int:5,pct:6,wil:7,lck:7,chr:7,mele:94,arch:80,mark:77},
	{id:4, name:'Greg',         altr:'Greg Michaels',       str:5,sta:6,agt:5,dex:6,int:8,pct:8,wil:8,lck:7,chr:8,mele:40,arch:90,mark:95},
	{id:5, name:'The Colonel',                              str:5,sta:7,agt:6,dex:6,int:7,pct:7,wil:7,lck:6,chr:7,mele:50,arch:80,mark:90},
	{id:10,name:'The Captain',  altr:'Gordon Ramses',       str:6,sta:7,agt:7,dex:6,int:7,pct:6,wil:6,lck:5,chr:7,mele:60,arch:63,mark:80},
	{id:11,name:'Lord Pteropus',altr:'Dominic Smith',       str:9,sta:7,agt:8,dex:8,int:5,pct:7,wil:9,lck:5,chr:5,mele:90,arch:90,mark:87},
	{id:20,name:'The Drug Lord',                            str:5,sta:5,agt:5,dex:5,int:7,pct:7,wil:7,lck:7,chr:5,mele:40,arch:30,mark:50},
	{id:21,name:'Mr Beast',                                 str:9,sta:6,agt:4,dex:5,int:3,pct:4,wil:5,lck:5,chr:2,mele:60,arch:15,mark:40},
	{id:22,name:'Mal Function', altr:'Malcolm Fung',        str:7,sta:6,agt:6,dex:5,int:4,pct:5,wil:6,lck:5,chr:3,mele:60,arch:70,mark:80},
	{id:23,name:'Thug A',       altr:'Joe Net',             str:7,sta:6,agt:5,dex:5,int:4,pct:5,wil:5,lck:5,chr:3,mele:50,arch:60,mark:50},
	{id:24,name:'Thug B',       altr:'Seven Jung',          str:6,sta:7,agt:5,dex:5,int:5,pct:4,wil:5,lck:5,chr:3,mele:50,arch:30,mark:70},
];