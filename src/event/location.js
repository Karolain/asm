import {Component} from '@angular/core';

@Component({
	selector: 'asm-location',
	templateUrl: '{{name}}'
})
export class Location {
	constructor() {
		this.location = {
			id: null,
			name: {
				en: null,
				fi: null
			},
			description: {
				en: null,
				fi: null
			},
			url: null
		};
	}
}