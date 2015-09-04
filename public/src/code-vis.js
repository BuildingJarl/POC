import esprima from 'esprima';
import * as escope from 'escope';
import {EventAggregator} from 'aurelia-event-aggregator';

export class CodeVisCustomElement {

	static inject = [Element, EventAggregator];

	constructor( element, ea ) {
		this.element = element;
		this.eventAggregator = ea;
	};

	attached() {
		this.eventAggregator.subscribe('draw', (payload) => {
			
			/*
			var scopeManager = escope.analyze(payload);
			console.log(scopeManager)
			*/

			var scopeManager = escope.analyze(payload);
			var globalScope = scopeManager.acquire(payload);

			console.log(globalScope)
			
		});
	}

	draw() {

	}
}