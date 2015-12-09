import esprima from 'esprima';
import * as escope from 'escope';
import myText from './textCode.txt!text';
import ace from 'ace';

//Editor CLASS Object
class Editor {
	constructor(element) {
		ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
		this.aceEditor = ace.edit(element)
		this.element = element;

		this.aceEditor.setTheme("ace/theme/monokai");
		this.aceEditor.getSession().setMode("ace/mode/javascript");
		this.aceEditor.setValue(myText);
	}

	resize() {
		this.aceEditor.resize()
	}
}

class File {
	constructor(el) {
		this.frame = document.createElement('iframe');
		this.frame.setAttribute('class', 'frameContainer');
		el.appendChild(this.frame);

		var container = document.createElement('div');
		container.setAttribute('class', 'container');

		console.log(this.frame)
		this.frame.document.open();
		this.frame.document.write(container);
		this.frame.document.close();

	}

	resize() {
		this.editor.resize();
	}
}


var viewPort = document.getElementById('viewport');
var fileOne = new File(viewport);



