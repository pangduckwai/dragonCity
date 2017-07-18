import { Injectable } from '@angular/core';

@Injectable()
export class CharacterImageService {
	displayed: Map<number, number> = new Map<number, number>();
	threadId: NodeJS.Timer;

	next(cid: number): Promise<void> {
		return new Promise(resolve => {
				setTimeout(() => {
					if (this.displayed.has(cid)) {
						let nxt = this.displayed.get(cid) + 1;
						if (nxt > 9) nxt = 0;
						this.displayed.set(cid, nxt);
						console.log("Next image of ", cid, nxt);
					} else {
						this.displayed.set(cid, 0);
						console.log("First image of ", cid);
					}
					resolve();
				}, 100);
		}).then(() => null);
	}

	trigger(cid: number): void {
		clearTimeout(this.threadId);

		this.threadId = setTimeout(() => {
			console.log("Print something...");
		}, 300);
	}
}