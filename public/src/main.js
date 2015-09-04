import ace from 'ace';
ace.config.set("basePath", "/jspm_packages/github/ajaxorg/ace-builds@1.2.0/");

console.log('hello')

var el = creatEL();
document.getElementById('blablabla').appendChild(el);
make(el,ace) 

var el2 = creatEL();
document.getElementById('blablabla').appendChild(el2);
make(el2,ace);

var el3 = creatEL();
document.getElementById('blablabla').appendChild(el3);
make(el3,ace);



function creatEL() {
	var halfWidth = 150;
	var halfHeight = 150;


	var el = document.createElement('div');
	el.setAttribute ( 'class', 'globalExecutionContext' );
	el.style.top = ((window.innerHeight / 2) - halfWidth ) + 'px';
	el.style.left = ((window.innerWidth / 2) - halfHeight ) + 'px';

	return el;
}

function creatEL2() {
	var halfWidth = 150;
	var halfHeight = 150;


	var el = document.createElement('div');
	el.setAttribute ( 'class', 'globalExecutionContext' );
	el.style.top = ((window.innerHeight / 3) - halfWidth ) + 'px';
	el.style.left = ((window.innerWidth / 2) - halfHeight ) + 'px';

	return el;
}

function creatEL3() {
	var halfWidth = 150;
	var halfHeight = 150;


	var el = document.createElement('div');
	el.setAttribute ( 'class', 'globalExecutionContext' );
	el.style.top = 0 + 'px';
	el.style.left = ((window.innerWidth / 2) - halfHeight ) + 'px';

	return el;
}


function make(element,ace) {
	var editor = ace.edit(element)
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/javascript");
}
