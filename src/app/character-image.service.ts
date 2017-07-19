import { Injectable } from '@angular/core';

@Injectable()
export class CharacterImageService {
	displayed: Map<number, number> = new Map<number, number>();
	threadId: any;

	next(cid: number): Promise<void> {
		return new Promise(resolve => {
				setTimeout(() => {
					if (this.displayed.has(cid)) {
						let nxt = this.displayed.get(cid) + 1;
						if (nxt > 9) nxt = 0;
						this.displayed.set(cid, nxt);
					} else {
						this.displayed.set(cid, 0);
					}
					resolve();
				}, 100);
		}).then(() => null);
	}

	// TODO:NOTE -- fire task only once even called mulitple times
	// trigger(cid: number): Promise<void> {
	// 	clearTimeout(this.threadId);

	// 	return new Promise(resolve => {
	// 		this.threadId = setTimeout(() => {
	// 			console.log("Print something...");
	// 			resolve();
	// 		}, 300);
	// 	}).then(() => null);
	// }
}