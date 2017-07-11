import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
	selector: 'char-detail',
	template: `
	<div *ngIf="character">
		<table>
		<tr><td><label>Name:</label></td>     <td colspan="2"><input [(ngModel)]="character.name" placeholder="name"></td></tr>
		<tr><td><label>Alter Ego:</label></td><td colspan="2"><input [(ngModel)]="character.altr" placeholder="alter ego"></td></tr>
		<tr><td colspan="3">&nbsp;</td></tr>
		<tr><td><label>Strength:</label></td>    <td><input type="range" min="0" max="9" [(ngModel)]="character.str"></td><td class="e"><label>{{character.str}}</label></td></tr>
		<tr><td><label>Stamina:</label></td>     <td><input type="range" min="0" max="9" [(ngModel)]="character.sta"></td><td class="e"><label>{{character.sta}}</label></td></tr>
		<tr><td><label>Agility:</label></td>     <td><input type="range" min="0" max="9" [(ngModel)]="character.agt"></td><td class="e"><label>{{character.agt}}</label></td></tr>
		<tr><td><label>Dexterity:</label></td>   <td><input type="range" min="0" max="9" [(ngModel)]="character.dex"></td><td class="e"><label>{{character.dex}}</label></td></tr>
		<tr><td><label>Intelligence:</label></td><td><input type="range" min="0" max="9" [(ngModel)]="character.int"></td><td class="e"><label>{{character.int}}</label></td></tr>
		<tr><td><label>Perception:</label></td>  <td><input type="range" min="0" max="9" [(ngModel)]="character.pct"></td><td class="e"><label>{{character.pct}}</label></td></tr>
		<tr><td><label>Willpower:</label></td>   <td><input type="range" min="0" max="9" [(ngModel)]="character.wil"></td><td class="e"><label>{{character.wil}}</label></td></tr>
		<tr><td><label>Luck:</label></td>        <td><input type="range" min="0" max="9" [(ngModel)]="character.lck"></td><td class="e"><label>{{character.lck}}</label></td></tr>
		<tr><td><label>Charisma:</label></td>    <td><input type="range" min="0" max="9" [(ngModel)]="character.chr"></td><td class="e"><label>{{character.chr}}</label></td></tr>
		<tr><td colspan="3">&nbsp;</td></tr>
		<tr><td><label>Melee skill:</label></td>  <td><input type="range" min="0" max="99" [(ngModel)]="character.mele"></td><td class="e"><label>{{character.mele}}</label></td></tr>
		<tr><td><label>Archery skill:</label></td><td><input type="range" min="0" max="99" [(ngModel)]="character.arch"></td><td class="e"><label>{{character.arch}}</label></td></tr>
		<tr><td><label>Marksmanship:</label></td> <td><input type="range" min="0" max="99" [(ngModel)]="character.mark"></td><td class="e"><label>{{character.mark}}</label></td></tr>
		</table>
	</div>`,
	styles: [`
		.e {
			text-align: right;
		}
	`]
})

export class CharDetailComponent {
	@Input() character: Character;
}