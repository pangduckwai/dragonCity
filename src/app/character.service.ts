import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Character } from './character';

@Injectable()
export class CharacterService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private charUrl = 'api/characterz';

	constructor(private http: Http) { }

	getCharacters(): Promise<Character[]> {
		return this.http.get(this.charUrl).toPromise()
			.then(response => response.json().data as Character[])
			.catch(this.handleError);
	}

	getCharacter(id: number):  Promise<Character> {
		const url = `${this.charUrl}/${id}`;
		return this.http.get(url).toPromise()
			.then(response => response.json().data as Character)
			.catch(this.handleError);
	}

	update(char: Character): Promise<Character> {
		const url = `${this.charUrl}/${char.id}`;
			return this.http.put(url, JSON.stringify(char), {headers: this.headers}).toPromise()
				.then(() => char)
				.catch(this.handleError);
	}

	create(char: Character): Promise<Character> {
		return this.getCharacters()
			.then(chars => {
				chars.sort((a: Character, b: Character) => {
					if (a.id < b.id) {
						return 1;
					} else if (a.id > b.id) {
						return -1;
					} else {
						return 0;
					}
				});

				char.id = chars[0].id + 1; // TODO NOTE: Generating new id should be the job of the server, not here!
				const url = `${this.charUrl}/${char.id}`;
				return this.http.post(url, JSON.stringify(char), {headers: this.headers}).toPromise()
					.then(() => char)
					.catch(this.handleError);
			})
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.charUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}