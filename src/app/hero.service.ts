import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

	public hero(name: string){
		console.log(name + 'I am a hero')
	}
}
