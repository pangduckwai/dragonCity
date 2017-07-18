import { Injectable } from '@angular/core';

@Injectable()
export class CharacterImageService {
	displayed: Map<number, number> = new Map<number, number>();
}