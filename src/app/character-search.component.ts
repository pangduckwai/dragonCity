import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { CharacterSearchService } from './character-search.service';
import { Character } from './character';

@Component({
	selector: 'character-search',
	templateUrl: './character-search.component.html',
	styleUrls: [ './character-search.component.css' ],
	providers: [CharacterSearchService]
})

export class CharacterSearchComponent implements OnInit {
	chars: Observable<Character[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private characterSearchService: CharacterSearchService,
		private router: Router) { }

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.chars = this.searchTerms
			.debounceTime(300)        // wait 300ms after each keystroke before considering the term
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.switchMap(term => term   // switch to new observable each time the term changes
				// return the http search observable
				? this.characterSearchService.search(term)
				// or the observable of empty heroes if there was no search term
				: Observable.of<Character[]>([]))
			.catch(error => {
				// TODO: add real error handling
				console.log(error);
				return Observable.of<Character[]>([]);
			});
	}

	gotoDetail(char: Character): void {
		let link = ['/detail', char.id];
		this.router.navigate(link);
	}
}