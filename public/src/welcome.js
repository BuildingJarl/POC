import {Compiler} from 'gooy/aurelia-compiler';

export class Welcome {
	static inject = [Element, Compiler];

	constructor(element, compiler) {
		this.element = element;
		this.compiler = compiler;
	}

	attached() {
				
		var el = document.createElement('code-editor');
		el.setAttribute ( 'class', 'globalExecutionContext' );

		var halfWidth = 150;
		var halfHeight = 150;
		

		el.style.top = ((window.innerHeight / 2) - halfWidth ) + 'px';
		el.style.left = ((window.innerWidth / 2) - halfHeight ) + 'px';

		
		document.getElementById('blablabla').appendChild(el);
		this.compiler.compile(el)
	}
}