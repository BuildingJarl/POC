import ace from 'ace';
import myText from './sample.txt!text';


//Editor CLASS Object
class Editor {
	constructor(element) {
		ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");
		this.aceEditor = ace.edit(element)
		this.element = element;

		this.aceEditor.setTheme("ace/theme/monokai");
		this.aceEditor.getSession().setMode("ace/mode/javascript");
		this.aceEditor.setValue(myText);

		this.aceEditor.setReadOnly(true);

		this.aceEditor.setOptions({
		  fontSize: "4pt",
		  wrap: true
		});
	}

	changeFont(to){
		this.aceEditor.setOptions({
		  fontSize: to + "pt"
		});
	}

	resize() {
		this.aceEditor.resize();
	}
}

var container = document.getElementById('my-editor');
var editor = new Editor(container);

var expanded = false;

container.addEventListener('click', function() {
	console.log('CLICKS')

	if(expanded !== true) {
		container.style.width = '800px';
		container.style.height = '900px';

		editor.changeFont(12);

		setTimeout( function() {
			editor.resize();
			expanded = true;
		}, 550)
		
	} else {
		container.style.width = '200px';
		container.style.height = '300px';

		editor.changeFont(4);
		
		expanded = false;
	}
	
})