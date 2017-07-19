import { Directive, Input } from '@angular/core';

import { CharacterImageService } from './character-image.service';

@Directive({
	selector: 'img[cid]',
	host: {
		'(error)': 'nextUrl()',
		'[src]': 'src'
	}
})

export class CharacterImageDirective {
	@Input() src: string;
	@Input() cid: string;

	constructor(private characterImageService: CharacterImageService) { }

	nextUrl() {
		let nxt = 0;
		let nid = +this.cid;

		let regex = /.*[/]c[0-9]{3}[-]([0-9])[.]png$/g;
		let mth = regex.exec(this.src);
		if (mth != null) {
			// Using image URL with suffix already, reaching here mean still fail -> 2 reasons:
			if (mth[1] === '0') {
				// '0' failed means there is no image for this character at all, do nothing
				return;
			} // else { nxt reset to 0 again
		} else {
			if (this.characterImageService.displayed.has(nid)) {
				nxt = this.characterImageService.displayed.get(nid) + 1;
			}
		}
		this.characterImageService.displayed.set(nid, nxt);

		this.src = `/assets/img/c${this.cid}-${nxt}.png`;
	}
}
