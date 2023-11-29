import { Component } from '@angular/core';

import IMG_FRAMEWORK from '../../assets/logo.angular.png';
import {HeroService} from "../../app/hero.service";
import {ButtonCallbacksPropType} from "@public-ui/components";

@Component({
	selector: 'app',
	templateUrl: 'component.html',
})
export class AppComponent {
	public readonly framework = IMG_FRAMEWORK;

	constructor(private heroService: HeroService) {}

	onKolibriButtonClick() {
		console.log('Kolibri event')
		this.heroService.hero('onKolibriButtonClick')
	}

	onButtonClick() {
		console.log('Button event')
		this.heroService.hero('onButtonClick')
	}

	buttonCallbacks: ButtonCallbacksPropType<any> = {
		onClick: () => {
			console.log('Button event')
			this.heroService.hero('buttonCallbacks - click')
		}
	};

}
