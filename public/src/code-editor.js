import ace from 'ace';
import esprima from 'esprima';
import {EventAggregator} from 'aurelia-event-aggregator';
import {noView} from 'aurelia-framework';

@noView
export class CodeEditorCustomElement {
	static inject = [Element, EventAggregator];

	constructor( element, ea ) {
		ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
		this.eventAggregator = ea;
		this.element = element;
		console.log('hello hello hello')
	};

	attached() {
		this.editor = ace.edit(this.element);
    	this.editor.setTheme("ace/theme/monokai");
    	this.editor.getSession().setMode("ace/mode/javascript");

    	this.editor.getSession().on('change', (e) => {
			//this.onChange(e);
		});
	}

	onChange(e) {

		var esprimaOptions = {
			loc: true,
			range: true,
			tolerant: true
		};

		var content = this.editor.getSession().getValue();
		var ast;
		var error;

		try {
			ast = esprima.parse( content , esprimaOptions );
		}
		catch(err) {
			error = err;
		}

		if(!error) {
			this.eventAggregator.publish('draw', ast );
		}
		
	}
}