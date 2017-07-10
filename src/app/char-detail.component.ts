import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
	selector: 'char-detail',
	template: `
	<div *ngIf="character">
		<table>
		<tr><td><label>Name: </label></td>             <td colspan="2"><input [(ngModel)]="character.name" placeholder="name"></td></tr>
		<tr><td><label>Alter Ego: </label></td>        <td colspan="2"><input [(ngModel)]="character.altr" placeholder="alter ego"></td></tr>
		<tr><td><label>Strength: </label></td>         <td><input type="range" min="0" max="9" [(ngModel)]="character.str"></td><td><label>{{character.str}}</label></td></tr>
		<tr><td><label>Stamina: </label></td>          <td><input type="range" min="0" max="9" [(ngModel)]="character.sta"></td><td><label>{{character.sta}}</label></td></tr>
		<tr><td><label>Intelligence: </label></td>     <td><input type="range" min="0" max="9" [(ngModel)]="character.int"></td><td><label>{{character.int}}</label></td></tr>
		<tr><td><label>Perception: </label></td>       <td><input type="range" min="0" max="9" [(ngModel)]="character.pct"></td><td><label>{{character.pct}}</label></td></tr>
		<tr><td><label>Dexterity: </label></td>        <td><input type="range" min="0" max="9" [(ngModel)]="character.dex"></td><td><label>{{character.dex}}</label></td></tr>
		<tr><td><label>Luck: </label></td>             <td><input type="range" min="0" max="9" [(ngModel)]="character.lck"></td><td><label>{{character.lck}}</label></td></tr>
		<tr><td><label>Charisma: </label></td>         <td><input type="range" min="0" max="9" [(ngModel)]="character.chr"></td><td><label>{{character.chr}}</label></td></tr>
		<tr><td><label>Martial Art Skill: </label></td><td><input type="range" min="0" max="9" [(ngModel)]="character.mas"></td><td><label>{{character.mas}}</label></td></tr>
		</table>
	</div>
	`
})

export class CharDetailComponent {
	@Input() character: Character;
}