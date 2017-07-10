import { Component } from '@angular/core';
import { Character } from './character';

@Component({
	selector: 'dragon-city',
	template: `
	<h1>{{title}}</h1>
	<h2>Characters</h2>
	<ul class="heroes">
		<li *ngFor="let indv of chars" [class.selected]="indv === selectedChar" (click)="onSelect(indv)">
			<span class="badge">{{('0' + indv.id).slice(-2)}}</span> {{indv.name}}
		</li>
	</ul>
	<char-detail [character]="selectedChar"></char-detail>
	`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
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


export class AppComponent  {
	title = 'The tales of Dragon City';

	selectedChar: Character;
	chars = CHARS;

	onSelect(selected: Character): void {
		this.selectedChar = selected;
	}
}

const CHARS: Character[] = [
	{id:1, name:'Lady Pteropus',altr:'Rachel Ross',         str:3,sta:4,int:9,pct:6,dex:8,lck:3,mas:7,chr:9},
	{id:2, name:'T.J.',         altr:'Trish Josée Michaels',str:4,sta:6,int:6,pct:7,dex:8,lck:6,mas:8,chr:8},
	{id:3, name:'Lee',                                      str:8,sta:8,int:5,pct:6,dex:9,lck:7,mas:9,chr:7},
	{id:4, name:'Greg',         altr:'Greg Michaels',       str:5,sta:6,int:8,pct:8,dex:6,lck:7,mas:4,chr:8},
	{id:5, name:'The Colonel',                              str:5,sta:7,int:7,pct:7,dex:6,lck:6,mas:5,chr:7},
	{id:10,name:'The Captain',  altr:'Gordon Ramses',       str:6,sta:7,int:7,pct:6,dex:6,lck:5,mas:6,chr:7},
	{id:11,name:'The Drug Lord',                            str:5,sta:5,int:7,pct:7,dex:5,lck:7,mas:4,chr:5},
	{id:12,name:'Mr Beast',                                 str:9,sta:6,int:3,pct:4,dex:5,lck:5,mas:6,chr:2},
	{id:13,name:'Mal Function', altr:'Malcolm Fung',        str:7,sta:6,int:4,pct:5,dex:5,lck:5,mas:6,chr:3},
	{id:14,name:'Thug A',       altr:'Joe Net',             str:7,sta:6,int:4,pct:5,dex:5,lck:5,mas:5,chr:3},
	{id:15,name:'Thug B',       altr:'Seven Jung',          str:6,sta:7,int:5,pct:4,dex:5,lck:5,mas:5,chr:3},
];