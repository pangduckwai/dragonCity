import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details</h2>
	<table>
	<tr><td><label>name: </label></td>        <td><input [(ngModel)]="hero.name" placeholder="name"></td></tr>
	<tr><td><label>Alter Ego: </label></td>   <td><input [(ngModel)]="hero.altr" placeholder="alter ego"></td></tr>
	<tr><td><label>Strength: </label></td>    <td><input [(ngModel)]="hero.str"></td></tr>
	<tr><td><label>Stamina: </label></td>     <td><input [(ngModel)]="hero.sta"></td></tr>
	<tr><td><label>Intelligence: </label></td><td><input [(ngModel)]="hero.int"></td></tr>
	<tr><td><label>Perception: </label></td>  <td><input [(ngModel)]="hero.pct"></td></tr>
	<tr><td><label>Dexterity: </label></td>   <td><input [(ngModel)]="hero.dex"></td></tr>
	<tr><td><label>Luck: </label></td>        <td><input [(ngModel)]="hero.lck"></td></tr>
	<tr><td><label>Charisma: </label></td>    <td><input [(ngModel)]="hero.chr"></td></tr>
	</table>
	`,
})


export class AppComponent  {
	title = 'Tour of Heros';

	hero = CHARS[0];
}

export class Character {
	id: number;
	name: string;
	altr?: string;
	str: number;
	sta: number;
	int: number;
	pct: number;
	dex: number;
	lck: number;
	chr: number;
}

const CHARS: Character[] = [
	{id:1, name:'Lady Pteropus',altr:'Rachel Ross',         str:3,sta:2,int:8,pct:4,dex:7,lck:3,chr:9},
	{id:2, name:'T.J.',         altr:'Trish Josée Michaels',str:4,sta:6,int:6,pct:7,dex:8,lck:6,chr:8},
	{id:3, name:'Lee',                                      str:8,sta:8,int:7,pct:8,dex:9,lck:7,chr:7},
	{id:4, name:'Greg',         altr:'Greg Michaels',       str:5,sta:6,int:8,pct:8,dex:6,lck:7,chr:8},
	{id:5, name:'The Colonel',                              str:5,sta:7,int:7,pct:7,dex:6,lck:7,chr:7},
	{id:10,name:'The Captain',  altr:'Gordon Ramses',       str:6,sta:7,int:7,pct:6,dex:6,lck:5,chr:7},
	{id:11,name:'The Drug Lord',                            str:5,sta:5,int:7,pct:7,dex:5,lck:7,chr:5},
	{id:12,name:'Mr Beast',                                 str:9,sta:6,int:3,pct:4,dex:5,lck:5,chr:2},
	{id:13,name:'Mal F.',                                   str:7,sta:6,int:4,pct:5,dex:5,lck:5,chr:3},
	{id:14,name:'Thug A',                                   str:7,sta:6,int:4,pct:5,dex:5,lck:5,chr:3},
	{id:15,name:'Thug B',                                   str:6,sta:7,int:5,pct:4,dex:5,lck:5,chr:3},
];