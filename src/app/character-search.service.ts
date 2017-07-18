import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
	
import { Character } from './character';

@Injectable()
export class CharacterSearchService {
	constructor(private http: Http) {}

	search(term: string): Observable<Character[]> {
		return this.http
			.get(`api/characterz/?name=${term}`)
			.map(response => response.json().data as Character[]);
	}
}